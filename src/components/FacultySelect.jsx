import React from 'react';
import './ViewTimetable.css';

const FacultySelect = ({ staffList, onSelectStaff, onBack }) => {
  return (
    <div className="selection-screen">
      <div className="selection-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2>👨‍🏫 Select Faculty Member</h2>
      </div>
      <div className="faculty-select-container">
        <label htmlFor="staff-select">Select Staff Name:</label>
        <select
          id="staff-select"
          className="staff-dropdown"
          onChange={(e) => onSelectStaff(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>-- Select a staff member --</option>
          {staffList.map(staff => (
            <option key={staff.id} value={staff.name}>
              {staff.name} ({staff.designation})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FacultySelect;
