import React, { useState } from 'react';

const SyncFaculty = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSyncFaculties = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:5000/api/sync/faculties', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
      } else {
        setError(data.message || 'Sync failed');
      }
    } catch (err) {
      setError('Failed to connect to server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleSyncDepartments = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:5000/api/sync/departments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
      } else {
        setError(data.message || 'Sync failed');
      }
    } catch (err) {
      setError('Failed to connect to server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sync-container">
      <h2 className="form-title">Sync Data from EduVertex</h2>
      <p className="form-subtitle">
        Synchronize faculty and department data from EduVertex ERP to Timetable Module
      </p>

      <div className="sync-actions">
        <div className="sync-card">
          <h3>🔄 Sync Faculty</h3>
          <p>Fetch active faculty members from EduVertex and sync to timetable database</p>
          <button 
            className="btn btn-primary" 
            onClick={handleSyncFaculties}
            disabled={loading}
          >
            {loading ? 'Syncing...' : 'Sync Faculty Now'}
          </button>
        </div>

        <div className="sync-card">
          <h3>🏢 Sync Departments</h3>
          <p>Fetch departments from EduVertex and sync to timetable database</p>
          <button 
            className="btn btn-primary" 
            onClick={handleSyncDepartments}
            disabled={loading}
          >
            {loading ? 'Syncing...' : 'Sync Departments Now'}
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message" style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fee2e2', borderRadius: '8px', color: '#dc2626' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div className="success-message" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#dcfce7', borderRadius: '8px', color: '#16a34a' }}>
          <h3>✅ Sync Successful!</h3>
          <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(result.data, null, 2)}
          </pre>
        </div>
      )}

      <div className="info-section" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h3>ℹ️ How it works</h3>
        <ul style={{ marginTop: '10px', lineHeight: '1.8' }}>
          <li><strong>Faculty Sync:</strong> Fetches all active faculty from <code>eduvertex.faculty_profiles</code> table and inserts/updates records in <code>nscet_timetable.faculties</code> table</li>
          <li><strong>Department Sync:</strong> Fetches departments from <code>eduvertex.departments</code> and syncs to <code>nscet_timetable.departments</code></li>
          <li><strong>Automatic Mapping:</strong> Departments are automatically mapped based on department codes</li>
          <li><strong>Update Logic:</strong> Existing faculty are updated, new faculty are inserted</li>
        </ul>
      </div>

      <style>{`
        .sync-container {
          padding: 24px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .sync-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 24px;
        }
        
        .sync-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        
        .sync-card h3 {
          margin-bottom: 12px;
          color: #1a1a2e;
        }
        
        .sync-card p {
          color: #64748b;
          margin-bottom: 16px;
          font-size: 14px;
        }
        
        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }
        
        .btn-primary {
          background: #3b82f6;
          color: white;
        }
        
        .btn-primary:hover {
          background: #2563eb;
        }
        
        .btn-primary:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default SyncFaculty;
