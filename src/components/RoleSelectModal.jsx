import React from 'react';
import './ViewTimetable.css';

const RoleSelectModal = ({ onSelectRole, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content role-select-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🎓 View Timetable</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="modal-description">Select your role to view the timetable</p>
          <div className="role-options">
            <button 
              className="role-card student-role"
              onClick={() => onSelectRole('student')}
            >
              <div className="role-icon">👨‍🎓</div>
              <div className="role-label">Student</div>
              <div className="role-description">View class timetable by year</div>
            </button>
            <button 
              className="role-card faculty-role"
              onClick={() => onSelectRole('faculty')}
            >
              <div className="role-icon">👨‍🏫</div>
              <div className="role-label">Faculty</div>
              <div className="role-description">View your teaching schedule</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectModal;
