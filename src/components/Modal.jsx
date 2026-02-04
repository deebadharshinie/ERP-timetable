import React from 'react';

const Modal = ({ onClose, onConfirm, forwardTo, setForwardTo }) => {
  const options = [
    { 
      id: 'hod', 
      label: 'Head of Department', 
      desc: 'Forward to HOD for departmental review and approval' 
    },
    { 
      id: 'class-incharge', 
      label: 'Class Incharge', 
      desc: 'Forward to class incharge for class-level review' 
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3 className="modal-title">Forward Timetable</h3>
        <p className="modal-subtitle">Select who you want to forward this timetable to for approval. They will be notified and can review, request changes, or approve the timetable.</p>
        
        <div className="modal-options">
          {options.map(option => (
            <div 
              key={option.id}
              className={`modal-option ${forwardTo === option.label ? 'selected' : ''}`}
              onClick={() => setForwardTo(option.label)}
            >
              <input 
                type="radio" 
                name="forwardTo" 
                checked={forwardTo === option.label}
                onChange={() => setForwardTo(option.label)}
              />
              <div>
                <div className="modal-option-label">{option.label}</div>
                <div className="modal-option-desc">{option.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            ❌ Cancel
          </button>
          <button 
            className="btn btn-primary" 
            onClick={onConfirm}
            disabled={!forwardTo}
          >
            📤 Forward Timetable
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
