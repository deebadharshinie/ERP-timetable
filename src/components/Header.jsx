import React, { useState, useEffect } from 'react';

const Header = ({ onShowDrafts, draftCount }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Timetable Management System</h1>
        <p className="header-subtitle">College ERP Portal</p>
      </div>
      <div className="header-right">
        <button 
          className="draft-header-button" 
          onClick={onShowDrafts}
          title="View Saved Drafts"
        >
          Drafts
          {draftCount > 0 && (
            <span className="draft-count">{draftCount}</span>
          )}
        </button>
        <div className="datetime">
          <div className="date">{formatDate(currentDate)}</div>
          <div className="time">{formatTime(currentDate)}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
