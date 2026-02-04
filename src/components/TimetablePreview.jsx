import React, { useState } from 'react';
import TimetableGrid from './TimetableGrid';

const TimetablePreview = ({ 
  timetableData, 
  onEdit, 
  onSaveDraft, 
  onSave, 
  onForward, 
  onApprove, 
  status 
}) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const isReadOnly = status === 'Approved' || status === 'Forwarded';
  const isDraft = status === 'Draft';

  const handleSave = () => {
    setIsSaved(true);
    if (onSave) {
      onSave();
    }
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2 className="preview-title">Timetable Preview</h2>
        <div className="preview-actions">
          {!isReadOnly && (
            <>
              <button className="btn btn-secondary" onClick={onEdit}>
                Edit Timetable
              </button>
              <button className="btn btn-warning" onClick={onSaveDraft}>
                Save Draft
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleSave}
                disabled={isSaved}
              >
                {isSaved ? '✓ Saved' : 'Save'}
              </button>
              <button 
                className="btn btn-success" 
                onClick={onForward}
                disabled={!isSaved}
                title={!isSaved ? 'Save timetable first before forwarding' : ''}
              >
                Forward for Approval
              </button>
            </>
          )}
          {status === 'Forwarded' && (
            <button className="btn btn-success" onClick={onApprove}>
              Approve
            </button>
          )}
        </div>
      </div>

      {isDraft && !isSaved && (
        <div className="draft-message">
          Draft - Save and forward for approval
        </div>
      )}

      {isDraft && isSaved && (
        <div className="saved-message">
          ✓ Timetable saved successfully. You can now forward for approval.
        </div>
      )}

      <div className="timetable-info">
        <div className="timetable-info-grid">
          <div className="info-item">
            <span className="info-label">Academic Year</span>
            <span className="info-value">{timetableData.academicYear || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Department</span>
            <span className="info-value">{timetableData.department || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Year</span>
            <span className="info-value">{timetableData.year || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Semester</span>
            <span className="info-value">{timetableData.semester || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Section</span>
            <span className="info-value">{timetableData.section || 'N/A'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Effective From</span>
            <span className="info-value">
              {timetableData.effectiveDate 
                ? new Date(timetableData.effectiveDate).toLocaleDateString('en-US', { 
                    year: 'numeric', month: 'long', day: 'numeric' 
                  }) 
                : 'N/A'}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Total Periods</span>
            <span className="info-value">{timetableData.periods?.length || 0}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Status</span>
            <span className={`status-badge status-${status.toLowerCase()}`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      <TimetableGrid periods={timetableData.periods || []} isReadOnly={isReadOnly} year={timetableData.year} />

      {isReadOnly && (
        <div style={{ 
          marginTop: '32px', 
          padding: '20px', 
          background: 'linear-gradient(135deg, #F1F5F9, #E2E8F0)', 
          borderRadius: '12px', 
          textAlign: 'center',
          border: '1px solid #E2E8F0'
        }}>
          <p style={{ color: '#64748B', fontSize: '14px', fontWeight: '500' }}>
            This timetable has been {status.toLowerCase()} and is now read-only
          </p>
        </div>
      )}
    </div>
  );
};

export default TimetablePreview;
