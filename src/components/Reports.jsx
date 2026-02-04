import React, { useState, useEffect } from 'react';
import TimetableGrid from './TimetableGrid';
import './Reports.css';

const Reports = ({ mockData }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedTimetable, setSelectedTimetable] = useState(null);

  // Filter timetables by year
  const getTimetablesByYear = (year) => {
    return mockData.filter(t => t.year === year);
  };

  // Handle year button click
  const handleYearClick = (year) => {
    setSelectedYear(year);
    const timetables = getTimetablesByYear(year);
    if (timetables.length > 0) {
      setSelectedTimetable(timetables[0]);
    } else {
      setSelectedTimetable(null);
    }
  };

  // Year buttons configuration
  const yearButtons = [
    { id: 'Second Year', label: '2nd Year', color: '#3B82F6' },
    { id: 'Third Year', label: '3rd Year', color: '#10B981' },
    { id: 'Final Year', label: '4th Year', color: '#F59E0B' }
  ];

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h2 className="reports-title">Timetable Reports</h2>
        <p className="reports-subtitle">Select a year to view its timetable</p>
      </div>

      {/* Year Selection Buttons */}
      <div className="year-buttons-container">
        <div className="year-buttons">
          {yearButtons.map((button) => (
            <button
              key={button.id}
              className={`year-button ${selectedYear === button.id ? 'active' : ''}`}
              style={{
                background: selectedYear === button.id ? button.color : '#F1F5F9',
                color: selectedYear === button.id ? 'white' : '#1E293B',
                borderColor: button.color
              }}
              onClick={() => handleYearClick(button.id)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Year Info */}
      {selectedYear && (
        <div className="selected-year-info">
          <h3 style={{ color: '#1E293B', fontSize: '18px', fontWeight: '600' }}>
            {selectedYear} Timetable
          </h3>
          <p style={{ color: '#64748B', fontSize: '14px' }}>
            {selectedTimetable 
              ? `Showing timetable for ${selectedTimetable.department} - ${selectedTimetable.section} Section`
              : 'No timetable available for this year'
            }
          </p>
        </div>
      )}

      {/* Timetable Display */}
      {selectedTimetable && (
        <div className="timetable-report-content">
          <div className="timetable-info">
            <div className="timetable-info-grid">
              <div className="info-item">
                <span className="info-label">Academic Year</span>
                <span className="info-value">{selectedTimetable.academicYear}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Department</span>
                <span className="info-value">{selectedTimetable.department}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Year</span>
                <span className="info-value">{selectedTimetable.year}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Semester</span>
                <span className="info-value">{selectedTimetable.semester}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Section</span>
                <span className="info-value">{selectedTimetable.section}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Effective From</span>
                <span className="info-value">
                  {selectedTimetable.effectiveDate 
                    ? new Date(selectedTimetable.effectiveDate).toLocaleDateString('en-US', { 
                        year: 'numeric', month: 'long', day: 'numeric' 
                      }) 
                    : 'N/A'}
                </span>
              </div>
            </div>
          </div>

          <TimetableGrid periods={selectedTimetable.periods || []} isReadOnly={true} year={selectedTimetable.year} />
        </div>
      )}

      {/* Empty State */}
      {selectedYear && !selectedTimetable && (
        <div className="reports-empty">
          <div className="reports-empty-icon">📋</div>
          <h3>No Timetable Found</h3>
          <p>There is no approved timetable available for {selectedYear}.</p>
          <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '8px' }}>
            Please create and approve a timetable first.
          </p>
        </div>
      )}

      {/* Initial State */}
      {!selectedYear && (
        <div className="reports-initial">
          <div className="reports-initial-icon">📊</div>
          <h3>Select a Year</h3>
          <p>Click on one of the buttons above to view the timetable for that year.</p>
        </div>
      )}
    </div>
  );
};

export default Reports;
