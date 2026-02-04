import React from 'react';

const DraftListModal = ({ drafts, onClose, onLoadDraft, onDeleteDraft }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="draft-list-modal" onClick={e => e.stopPropagation()}>
        <div className="draft-list-header">
          <h2 className="draft-list-title">📝 Saved Drafts</h2>
          <button className="draft-list-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="draft-list-content">
          {drafts.length === 0 ? (
            <div className="draft-list-empty">
              <div className="draft-list-empty-icon">📋</div>
              <p>No draft timetables saved yet.</p>
              <p className="draft-list-empty-hint">Create and save a timetable as draft to see it here.</p>
            </div>
          ) : (
            <div className="draft-list-grid">
              {drafts.map(draft => (
                <div key={draft.id} className="draft-card">
                  <div className="draft-card-header">
                    <span className="draft-status-badge">📝 Draft</span>
                    <span className="draft-saved-time">{draft.savedAtFormatted}</span>
                  </div>
                  <div className="draft-card-body">
                    <h3 className="draft-department">{draft.department}</h3>
                    <div className="draft-details">
                      <div className="draft-detail-row">
                        <span className="draft-detail-label">Year:</span>
                        <span className="draft-detail-value">{draft.year}</span>
                      </div>
                      <div className="draft-detail-row">
                        <span className="draft-detail-label">Semester:</span>
                        <span className="draft-detail-value">{draft.semester}</span>
                      </div>
                      <div className="draft-detail-row">
                        <span className="draft-detail-label">Section:</span>
                        <span className="draft-detail-value">{draft.section}</span>
                      </div>
                      <div className="draft-detail-row">
                        <span className="draft-detail-label">Academic Year:</span>
                        <span className="draft-detail-value">{draft.academicYear}</span>
                      </div>
                      <div className="draft-detail-row">
                        <span className="draft-detail-label">Effective From:</span>
                        <span className="draft-detail-value">
                          {draft.effectiveDate ? new Date(draft.effectiveDate).toLocaleDateString() : 'N/A'}
                        </span>
                      </div>
                      <div className="draft-detail-row">
                        <span className="draft-detail-label">Periods:</span>
                        <span className="draft-detail-value">{draft.periods?.length || 0}</span>
                      </div>
                    </div>
                  </div>
                  <div className="draft-card-actions">
                    <button 
                      className="btn btn-primary btn-sm" 
                      onClick={() => onLoadDraft(draft)}
                    >
                      👁️ View/Edit
                    </button>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => onDeleteDraft(draft.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DraftListModal;
