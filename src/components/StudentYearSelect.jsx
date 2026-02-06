import React from 'react';
import './ViewTimetable.css';

const YEAR_OPTIONS = [
  { id: 'I Year', label: 'First Year', description: 'Freshman Year' },
  { id: 'II Year', label: 'Second Year', description: 'Sophomore Year' },
  { id: 'III Year', label: 'Third Year', description: 'Junior Year' },
  { id: 'IV Year', label: 'Final Year', description: 'Senior Year' },
];

const StudentYearSelect = ({ onSelectYear, onBack }) => {
  return (
    <div className="selection-screen">
      <div className="selection-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2>👨‍🎓 Select Your Year</h2>
      </div>
      <div className="year-options">
        {YEAR_OPTIONS.map(year => (
          <button
            key={year.id}
            className="year-card"
            onClick={() => onSelectYear(year.id)}
          >
            <div className="year-label">{year.label}</div>
            <div className="year-description">{year.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentYearSelect;
