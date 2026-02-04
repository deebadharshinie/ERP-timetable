import React from 'react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'form', icon: '📅', label: 'Create Timetable' },
    { id: 'preview', icon: '👁️', label: 'View Timetable' },
    { id: 'reports', icon: '📊', label: 'Reports' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">College ERP</span>
        </div>
        <p className="logo-subtitle">Timetable Manager</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => setCurrentView(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
