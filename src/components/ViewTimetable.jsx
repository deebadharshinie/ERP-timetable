import React, { useState, useMemo, useEffect } from 'react';
import RoleSelectModal from './RoleSelectModal';
import StudentYearSelect from './StudentYearSelect';
import FacultySelect from './FacultySelect';
import TimetableGrid from './TimetableGrid';
import { mockTimetableData, mockStaff } from '../data/mockData';
import './ViewTimetable.css';

const ViewTimetable = () => {
  const [step, setStep] = useState('role'); // 'role', 'student', 'faculty', 'timetable'
  const [role, setRole] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [draftTimetables, setDraftTimetables] = useState([]);
  
  // Load drafts from localStorage
  useEffect(() => {
    const savedDrafts = localStorage.getItem('timetableDrafts');
    if (savedDrafts) {
      try {
        const drafts = JSON.parse(savedDrafts);
        // Only include approved or draft timetables (not rejected)
        const validDrafts = drafts.filter(d => d.status !== 'Rejected');
        setDraftTimetables(validDrafts);
      } catch (e) {
        console.error('Error loading drafts:', e);
      }
    }
  }, []);
  
  // Combine mock data with drafts
  const allTimetableData = useMemo(() => {
    // Convert drafts to same format as mockTimetableData
    const draftData = draftTimetables.map((draft, index) => ({
      id: `draft-${index}`,
      academicYear: draft.academicYear,
      department: draft.department,
      year: draft.year,
      semester: draft.semester,
      section: draft.section,
      effectiveDate: draft.effectiveDate,
      status: draft.status,
      periods: draft.periods || []
    }));
    
    return [...draftData, ...mockTimetableData];
  }, [draftTimetables]);

  // Get timetable data based on selection
  const timetableData = useMemo(() => {
    if (role === 'student' && selectedYear) {
      // Map year format for matching
      const yearMap = {
        'I Year': 'First Year',
        'II Year': 'Second Year',
        'III Year': 'Third Year',
        'IV Year': 'Final Year'
      };
      const mappedYear = yearMap[selectedYear] || selectedYear;
      return allTimetableData.find(t => t.year === mappedYear) || null;
    }
    return null;
  }, [role, selectedYear, allTimetableData]);

  // Get filtered periods for faculty (derived from student timetable - mock + drafts)
  const facultyPeriods = useMemo(() => {
    if (role === 'faculty' && selectedStaff) {
      const allPeriods = allTimetableData.flatMap(t => 
        (t.periods || []).map(p => ({
          ...p,
          year: t.year,
          department: t.department,
          section: t.section,
          status: t.status
        }))
      );
      // Filter: Only show periods where staff is assigned
      // Exclude Break, Lunch, and Free Period
      return allPeriods.filter(p => 
        p.staffName === selectedStaff && 
        !['Break', 'Lunch', 'Free Period'].includes(p.subjectType)
      );
    }
    return [];
  }, [role, selectedStaff, allTimetableData]);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'student') {
      setStep('student');
    } else {
      setStep('faculty');
    }
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setStep('timetable');
  };

  const handleStaffSelect = (staffName) => {
    if (staffName) {
      setSelectedStaff(staffName);
      setStep('timetable');
    }
  };

  const handleBack = () => {
    setStep('role');
    setRole(null);
    setSelectedYear(null);
    setSelectedStaff(null);
  };

  const handleBackFromSelection = () => {
    setStep('role');
    setRole(null);
  };

  // Get staff info for display
  const staffInfo = selectedStaff 
    ? mockStaff.find(s => s.name === selectedStaff) 
    : null;

  // Render faculty timetable horizontal grid (Days as rows, Periods as columns)
  const renderFacultyTimetable = () => {
    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const PERIODS = [1, 2, 3, 4, 5, 6, 7];
    
    // Create a map of day -> period -> period data
    const timetableMap = {};
    DAYS.forEach(day => {
      timetableMap[day] = {};
      PERIODS.forEach(period => {
        timetableMap[day][period] = null;
      });
    });
    
    // Fill in the timetable with faculty periods
    facultyPeriods.forEach(period => {
      const day = period.day;
      const periodNum = typeof period.periodNumber === 'number' ? period.periodNumber : parseInt(period.periodNumber);
      if (timetableMap[day] && timetableMap[day][periodNum] !== undefined) {
        timetableMap[day][periodNum] = period;
      }
    });
    
    return (
      <div className="faculty-timetable-container">
        <div className="faculty-header-info">
          <h3>📋 Teaching Schedule - {selectedStaff}</h3>
          {staffInfo && (
            <p className="staff-dept">{staffInfo.department} | {staffInfo.designation}</p>
          )}
        </div>
        
        <div className="faculty-summary">
          <span className="total-classes">Total Classes: {facultyPeriods.length}</span>
        </div>
        
        <div className="faculty-timetable-grid">
          {/* Header Row */}
          <div className="faculty-grid-header faculty-grid-corner">Day \ Period</div>
          {PERIODS.map(period => (
            <div key={period} className="faculty-grid-header faculty-period-header">
              P{period}
            </div>
          ))}
          
          {/* Day Rows */}
          {DAYS.map(day => (
            <React.Fragment key={day}>
              <div className="faculty-grid-day">{day}</div>
              {PERIODS.map(periodNum => {
                const period = timetableMap[day][periodNum];
                return (
                  <div 
                    key={`${day}-${periodNum}`} 
                    className={`faculty-grid-cell ${period ? 'has-class' : 'empty'}`}
                  >
                    {period ? (
                      <div className="faculty-cell-content">
                        <div className="faculty-cell-class">
                          {period.year} {period.department} - Sec {period.section}
                        </div>
                        <div className="faculty-cell-subject">
                          {period.subjectCode}: {period.subjectName}
                        </div>
                        <div className="faculty-cell-room">
                          📍 {period.roomNumber}
                        </div>
                      </div>
                    ) : (
                      <span className="empty-cell">-</span>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        
        {facultyPeriods.length === 0 && (
          <div className="no-classes-message">
            <div className="no-classes-icon">📝</div>
            <p>No classes assigned to this faculty member.</p>
            <p className="hint">Classes will appear here when assigned in the student timetable.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="view-timetable-container">
      {/* Role Selection Modal */}
      {step === 'role' && (
        <RoleSelectModal 
          onSelectRole={handleRoleSelect}
          onClose={handleBack}
        />
      )}

      {/* Student Year Selection */}
      {step === 'student' && (
        <StudentYearSelect 
          onSelectYear={handleYearSelect}
          onBack={handleBackFromSelection}
        />
      )}

      {/* Faculty Staff Selection */}
      {step === 'faculty' && (
        <FacultySelect 
          staffList={mockStaff}
          onSelectStaff={handleStaffSelect}
          onBack={handleBackFromSelection}
        />
      )}

      {/* Timetable Display */}
      {step === 'timetable' && (
        <div className="timetable-display">
          <div className="timetable-header">
            <button className="back-btn" onClick={handleBack}>
              ← Select Different {role === 'student' ? 'Year' : 'Faculty'}
            </button>
            
            {role === 'student' && timetableData && (
              <div className="timetable-title">
                <h2>📅 Class Timetable</h2>
                <p className="timetable-info">
                  {timetableData.department} | {timetableData.year} | Section {timetableData.section}
                </p>
              </div>
            )}
            
            {role === 'faculty' && selectedStaff && (
              <div className="timetable-title">
                <h2>📅 Faculty Schedule</h2>
              </div>
            )}
          </div>

          {role === 'student' && timetableData && (
            <TimetableGrid 
              periods={timetableData.periods}
              isReadOnly={true}
              year={selectedYear}
            />
          )}

          {role === 'faculty' && renderFacultyTimetable()}
        </div>
      )}
    </div>
  );
};

export default ViewTimetable;
