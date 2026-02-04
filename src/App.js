import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TimetableForm from './components/TimetableForm';
import TimetablePreview from './components/TimetablePreview';
import Reports from './components/Reports';
import Modal from './components/Modal';
import DraftListModal from './components/DraftListModal';
import './App.css';
import { mockTimetableData } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('form');
  const [timetableData, setTimetableData] = useState({
    academicYear: '',
    department: '',
    year: '',
    semester: '',
    section: '',
    effectiveDate: '',
    periods: []
  });
  const [status, setStatus] = useState('Draft');
  const [showModal, setShowModal] = useState(false);
  const [forwardTo, setForwardTo] = useState('');
  const [drafts, setDrafts] = useState([]);
  const [showDraftList, setShowDraftList] = useState(false);

  // Load drafts from localStorage on mount
  useEffect(() => {
    const savedDrafts = localStorage.getItem('timetableDrafts');
    if (savedDrafts) {
      setDrafts(JSON.parse(savedDrafts));
    }
  }, []);

  // Save drafts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('timetableDrafts', JSON.stringify(drafts));
  }, [drafts]);

  const handleSaveDraft = () => {
    const draft = {
      id: Date.now(),
      ...timetableData,
      status: 'Draft',
      savedAt: new Date().toISOString(),
      savedAtFormatted: new Date().toLocaleString()
    };
    
    // Check if we should update existing draft or create new
    const existingDraftIndex = drafts.findIndex(
      d => d.academicYear === timetableData.academicYear &&
           d.department === timetableData.department &&
           d.year === timetableData.year &&
           d.semester === timetableData.semester &&
           d.section === timetableData.section
    );
    
    if (existingDraftIndex >= 0) {
      const updatedDrafts = [...drafts];
      updatedDrafts[existingDraftIndex] = draft;
      setDrafts(updatedDrafts);
    } else {
      setDrafts([...drafts, draft]);
    }
    
    setStatus('Draft');
    alert('Timetable saved as draft successfully!');
  };

  const handleForward = () => {
    setShowModal(true);
  };

  const handleConfirmForward = () => {
    if (forwardTo) {
      setStatus('Forwarded');
      setShowModal(false);
      setForwardTo('');
      alert(`Timetable forwarded to ${forwardTo} for approval!`);
    } else {
      alert('Please select who to forward to.');
    }
  };

  const handleApprove = () => {
    setStatus('Approved');
    alert('Timetable approved successfully!');
  };

  const handleEdit = () => {
    setCurrentView('form');
  };

  const handleGenerateTimetable = (data) => {
    setTimetableData(data);
    setCurrentView('preview');
  };

  const handleLoadDraft = (draft) => {
    setTimetableData({
      academicYear: draft.academicYear,
      department: draft.department,
      year: draft.year,
      semester: draft.semester,
      section: draft.section,
      effectiveDate: draft.effectiveDate,
      periods: draft.periods
    });
    setStatus('Draft');
    setCurrentView('preview');
    setShowDraftList(false);
  };

  const handleDeleteDraft = (draftId) => {
    if (window.confirm('Are you sure you want to delete this draft?')) {
      const updatedDrafts = drafts.filter(d => d.id !== draftId);
      setDrafts(updatedDrafts);
    }
  };

  return (
    <div className="app">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="main-content">
        <Header 
          onShowDrafts={() => setShowDraftList(true)}
          draftCount={drafts.length}
        />
        <div className="content-area">
          {currentView === 'form' && (
            <TimetableForm 
              onGenerate={handleGenerateTimetable}
              initialData={timetableData}
              isReadOnly={status === 'Approved' || status === 'Forwarded'}
            />
          )}
          {currentView === 'preview' && (
            <TimetablePreview 
              timetableData={timetableData}
              onEdit={handleEdit}
              onSaveDraft={handleSaveDraft}
              onSave={handleSaveDraft}
              onForward={handleForward}
              onApprove={handleApprove}
              status={status}
            />
          )}
          {currentView === 'reports' && (
            <Reports mockData={mockTimetableData} />
          )}
        </div>
      </div>
      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmForward}
          forwardTo={forwardTo}
          setForwardTo={setForwardTo}
        />
      )}
      {showDraftList && (
        <DraftListModal
          drafts={drafts}
          onClose={() => setShowDraftList(false)}
          onLoadDraft={handleLoadDraft}
          onDeleteDraft={handleDeleteDraft}
        />
      )}
    </div>
  );
}

export default App;
