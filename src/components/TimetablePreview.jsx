import React, { useState } from 'react';
import TimetableGrid from './TimetableGrid';
import { timetableAPI } from '../services/api';

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
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  
  const isReadOnly = status === 'Approved' || status === 'Forwarded';
  const isDraft = status === 'Draft';

  const handleSaveToAPI = async () => {
    try {
      setSaving(true);
      setError(null);

      // Prepare data for API
      const timetablePayload = {
        class_id: timetableData.class_id,
        semester: timetableData.semester,
        created_by: 1 // Would normally come from auth
      };

      // Create timetable entry for each period
      for (const period of timetableData.periods || []) {
        const periodData = {
          ...timetablePayload,
          subject_id: period.subject_id,
          faculty_id: period.faculty_id,
          day_of_week: period.day,
          time_slot_id: period.time_slot_id,
          room_id: period.room_id || null
        };

        await timetableAPI.create(periodData);
      }

      setIsSaved(true);
      if (onSave) {
        onSave();
      }
    } catch (err) {
      console.error('Error saving timetable:', err);
      setError('Failed to save timetable. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleSave = () => {
    setIsSaved(true);
    if (onSave) {
      onSave();
    }
  };

  // Get class info display
  const getClassDisplay = () => {
    if (timetableData.classId) {
      return `Class ID: ${timetableData.classId}`;
    }
    if (timetableData.year && timetableData.section) {
      return `${timetableData.year} - Section ${timetableData.section}`;
    }
    return 'N/A';
  };

  // Get department display
  const getDepartmentDisplay = () => {
    if (timetableData.department) {
      return typeof timetableData.department === 'number' 
        ? `Dept ID: ${timetableData.department}` 
        : timetableData.department;
    }
    return 'N/A';
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
                onClick={handleSaveToAPI}
                disabled={saving || isSaved}
              >
                {saving ? 'Saving...' : isSaved ? '✓ Saved' : 'Save to Database'}
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

      {error && (
        <div style={{ 
          padding: '12px', 
          background: '#FEF2F2', 
          color: '#DC2626', 
          borderRadius: '6px', 
          marginBottom: '20px' 
        }}>
          {error}
        </div>
      )}

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
            <span className="info-value">{getDepartmentDisplay()}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Class</span>
            <span className="info-value">{getClassDisplay()}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Semester</span>
            <span className="info-value">{timetableData.semester || 'N/A'}</span>
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

      <TimetableGrid 
        periods={timetableData.periods || []} 
        isReadOnly={isReadOnly} 
        year={timetableData.year} 
      />

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
