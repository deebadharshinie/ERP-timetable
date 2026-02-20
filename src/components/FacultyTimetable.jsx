import React, { useState, useEffect } from 'react';
import { facultyAPI, timetableAPI } from '../services/api';

const FacultyTimetable = () => {
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingTimetable, setLoadingTimetable] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Fetch faculties directly from EduVertex on mount
  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        setLoading(true);
        
        // Fetch faculty directly from EduVertex
        const response = await facultyAPI.getFromEduvertex();
        
        if (response.success) {
          setFaculties(response.data);
        } else {
          setError('No faculty found in EduVertex');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching faculties from EduVertex:', err);
        setError('Failed to load faculty from EduVertex. Please check if the backend is running.');
        setLoading(false);
      }
    };
    
    fetchFaculties();
  }, []);

  // Filter faculties by department
  const filteredFaculties = selectedDepartment 
    ? faculties.filter(f => f.department_id === parseInt(selectedDepartment))
    : faculties;

  // Get unique departments from faculty data
  const departments = [...new Map(faculties.map(f => [f.department_id, { id: f.department_id, name: f.department_id }])).values()];

  // Fetch timetable when faculty is selected
  useEffect(() => {
    const fetchFacultyTimetable = async () => {
      if (!selectedFaculty) return;
      
      try {
        setLoadingTimetable(true);
        const response = await timetableAPI.getByEmployee(selectedFaculty.employeeId);
        
        if (response.success) {
          setTimetable(response.data);
        } else {
          setTimetable([]);
        }
        setLoadingTimetable(false);
      } catch (err) {
        console.error('Error fetching faculty timetable:', err);
        setTimetable([]);
        setLoadingTimetable(false);
      }
    };
    
    fetchFacultyTimetable();
  }, [selectedFaculty]);

  const handleFacultyChange = (e) => {
    const facultyId = e.target.value;
    if (facultyId) {
      const faculty = faculties.find(f => f.id === parseInt(facultyId));
      setSelectedFaculty(faculty);
    } else {
      setSelectedFaculty(null);
      setTimetable([]);
    }
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedFaculty(null);
    setTimetable([]);
  };
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const PERIODS = [1, 2, 3, 4, 5, 6];
  
  const buildTimetableGrid = () => {
    const grid = {};
    DAYS.forEach(day => {
      grid[day] = {};
      PERIODS.forEach(period => {
        grid[day][period] = null;
      });
    });
    
    // Fill in the timetable data
    timetable.forEach(entry => {
      const day = entry.day;
      const period = entry.period_number;
      if (grid[day] && grid[day][period] !== undefined) {
        grid[day][period] = entry;
      }
    });
    
    return grid;
  };

  const timetableGrid = buildTimetableGrid();

  const getDepartmentName = (deptId) => {
    const dept = departments.find(d => d.id === deptId);
    return dept ? dept.department_name : 'Unknown';
  };

  if (loading) {
    return (
      <div className="faculty-timetable-container">
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Loading faculty data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="faculty-timetable-page">
      <div className="page-header">
        <h2>👨‍🏫 Faculty Timetable</h2>
        <p className="page-subtitle">View the allotted timetable for each faculty member</p>
      </div>

      {error && (
        <div style={{ padding: '12px', background: '#FEF2F2', color: '#DC2626', borderRadius: '6px', marginBottom: '20px' }}>
          {error}
        </div>
      )}

      {/* Faculty Selection */}
      <div className="selection-panel">
        <div className="selection-row">
          <div className="form-group">
            <label>Select Department</label>
            <select
              className="form-select"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.department_name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Select Faculty</label>
            <select
              className="form-select"
              value={selectedFaculty?.id || ''}
              onChange={handleFacultyChange}
              disabled={filteredFaculties.length === 0}
            >
              <option value="">-- Select Faculty --</option>
              {filteredFaculties.map(faculty => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name} {faculty.designation ? `(${faculty.designation})` : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Timetable Display */}
      {selectedFaculty && (
        <div className="timetable-display">
          <div className="faculty-info-card">
            <div className="faculty-info-header">
              <h3>📋 Teaching Schedule</h3>
              <span className="total-classes">{timetable.length} Classes</span>
            </div>
            <div className="faculty-details">
              <p><strong>Name:</strong> {selectedFaculty.name}</p>
              <p><strong>Designation:</strong> {selectedFaculty.designation || 'Assistant Professor'}</p>
              <p><strong>Department:</strong> {getDepartmentName(selectedFaculty.department_id)}</p>
              <p><strong>Email:</strong> {selectedFaculty.email || 'N/A'}</p>
            </div>
          </div>

          {loadingTimetable ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Loading timetable...</p>
            </div>
          ) : timetable.length > 0 ? (
            <div className="timetable-grid-container">
              <table className="faculty-timetable-grid">
                <thead>
                  <tr>
                    <th className="corner-cell">Day \ Period</th>
                    {PERIODS.map(period => (
                      <th key={period} className="period-header">
                        P{period}
                        <span className="period-time">
                          {timetable.find(t => t.period_number === period)?.start_time?.slice(0, 5) || '--:--'} - 
                          {timetable.find(t => t.period_number === period)?.end_time?.slice(0, 5) || '--:--'}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DAYS.map(day => (
                    <tr key={day}>
                      <td className="day-cell">{day}</td>
                      {PERIODS.map(period => {
                        const entry = timetableGrid[day][period];
                        return (
                          <td 
                            key={`${day}-${period}`} 
                            className={`timetable-cell ${entry ? 'has-class' : 'empty'}`}
                          >
                            {entry ? (
                              <div className="class-details">
                                <div className="class-subject">
                                  <strong>{entry.subject?.code}</strong>: {entry.subject?.name}
                                </div>
                                <div className="class-class">
                                  {entry.class?.name} - Sec {entry.class?.section}
                                </div>
                                <div className="class-dept">
                                  {entry.class?.department?.name}
                                </div>
                                <div className="class-room">
                                  📍 {entry.room?.number || 'N/A'}
                                </div>
                              </div>
                            ) : (
                              <span className="empty-slot">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-classes-message">
              <div className="no-classes-icon">📝</div>
              <p>No classes assigned to this faculty member.</p>
              <p className="hint">Create a timetable and assign this faculty to see their schedule.</p>
            </div>
          )}
        </div>
      )}

      {/* No faculty selected state */}
      {!selectedFaculty && !loading && (
        <div className="empty-state">
          <div className="empty-icon">👨‍🏫</div>
          <h3>Select a Faculty</h3>
          <p>Choose a department and faculty member from the dropdown above to view their timetable.</p>
        </div>
      )}

      <style>{`
        .faculty-timetable-page {
          padding: 24px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 24px;
        }

        .page-header h2 {
          margin: 0 0 8px 0;
          color: #1a1a2e;
          font-size: 24px;
        }

        .page-subtitle {
          color: #64748b;
          margin: 0;
        }

        .selection-panel {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .selection-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-select {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
        }

        .form-select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .faculty-info-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .faculty-info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e5e7eb;
        }

        .faculty-info-header h3 {
          margin: 0;
          color: #1a1a2e;
        }

        .total-classes {
          background: #dbeafe;
          color: #1d4ed8;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }

        .faculty-details {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .faculty-details p {
          margin: 0;
          font-size: 14px;
          color: #64748b;
        }

        .faculty-details strong {
          color: #374151;
        }

        .timetable-grid-container {
          overflow-x: auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .faculty-timetable-grid {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .faculty-timetable-grid th,
        .faculty-timetable-grid td {
          border: 1px solid #e5e7eb;
          padding: 8px;
          text-align: center;
        }

        .corner-cell {
          background: #f9fafb;
          font-weight: 600;
          width: 100px;
        }

        .period-header {
          background: #f9fafb;
          padding: 12px 8px !important;
          font-weight: 600;
        }

        .period-time {
          display: block;
          font-size: 11px;
          font-weight: normal;
          color: #64748b;
          margin-top: 4px;
        }

        .day-cell {
          background: #f9fafb;
          font-weight: 600;
          width: 100px;
          text-align: left !important;
          padding-left: 12px !important;
        }

        .timetable-cell {
          min-width: 150px;
          height: 80px;
          vertical-align: top;
        }

        .timetable-cell.has-class {
          background: #f0fdf4;
        }

        .timetable-cell.empty {
          background: #fafafa;
        }

        .class-details {
          text-align: left;
          padding: 4px;
        }

        .class-subject {
          font-size: 12px;
          color: #166534;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .class-class {
          font-size: 11px;
          color: #374151;
          margin-bottom: 2px;
        }

        .class-dept {
          font-size: 10px;
          color: #64748b;
          margin-bottom: 2px;
        }

        .class-room {
          font-size: 11px;
          color: #6b7280;
        }

        .empty-slot {
          color: #d1d5db;
          font-size: 18px;
        }

        .no-classes-message {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .no-classes-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .no-classes-message p {
          color: #64748b;
          margin: 8px 0;
        }

        .no-classes-message .hint {
          font-size: 14px;
          color: #9ca3af;
        }

        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .empty-icon {
          font-size: 64px;
          margin-bottom: 16px;
        }

        .empty-state h3 {
          color: #374151;
          margin: 0 0 8px 0;
        }

        .empty-state p {
          color: #64748b;
        }
      `}</style>
    </div>
  );
};

export default FacultyTimetable;
