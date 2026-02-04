import React, { useState, useEffect } from 'react';

// Timing for Third Year & Final Year (existing structure)
const PERIOD_TIMES_NORMAL = [
  { period: 1, start: '09:30', end: '10:20', label: 'Period 1' },
  { period: 2, start: '10:20', end: '11:10', label: 'Period 2' },
  { period: 'Break', start: '11:10', end: '11:30', label: 'Break' },
  { period: 3, start: '11:30', end: '12:25', label: 'Period 3' },
  { period: 'Lunch', start: '12:25', end: '01:10', label: 'Lunch' },
  { period: 4, start: '01:10', end: '02:00', label: 'Period 4' },
  { period: 5, start: '02:00', end: '02:20', label: 'Period 5' },
  { period: 'Break2', start: '02:20', end: '03:10', label: 'Break' },
  { period: 6, start: '03:10', end: '04:00', label: 'Period 6' },
  { period: 7, start: '04:00', end: '04:45', label: 'Period 7' },
];

// Timing for First Year & Second Year (continuous with breaks after P2, P4, P6)
const PERIOD_TIMES_FIRST_SECOND = [
  { period: 1, start: '09:30', end: '10:20', label: 'Period 1' },
  { period: 2, start: '10:20', end: '11:10', label: 'Period 2' },
  { period: 'Break1', start: '11:10', end: '11:30', label: 'Break' },
  { period: 3, start: '11:30', end: '12:20', label: 'Period 3' },
  { period: 4, start: '12:20', end: '01:10', label: 'Period 4' },
  { period: 'Lunch', start: '01:30', end: '02:10', label: 'Lunch' },
  { period: 5, start: '02:10', end: '03:00', label: 'Period 5' },
  { period: 6, start: '03:00', end: '03:50', label: 'Period 6' },
  { period: 'Break3', start: '03:50', end: '04:10', label: 'Break' },
  { period: 7, start: '04:10', end: '05:00', label: 'Period 7' },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SUBJECT_TYPES = ['Theory', 'Lab', 'Free Period', 'Break', 'Lunch'];

const TimetableForm = ({ onGenerate, initialData, isReadOnly }) => {
  const [formData, setFormData] = useState({
    academicYear: '',
    department: '',
    year: '',
    semester: '',
    section: '',
    effectiveDate: '',
    ...initialData
  });

  const [periodForm, setPeriodForm] = useState({
    day: 'Monday',
    periodNumber: 1,
    subjectCode: '',
    subjectName: '',
    subjectType: 'Theory',
    staffName: '',
    roomNumber: ''
  });

  const [periods, setPeriods] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [errors, setErrors] = useState({});

  // Get period times based on year (First/Second Year have different timing)
  const getPeriodTimes = () => {
    const isFirstOrSecondYear = formData.year === 'I Year' || formData.year === 'II Year';
    return isFirstOrSecondYear ? PERIOD_TIMES_FIRST_SECOND : PERIOD_TIMES_NORMAL;
  };

  // Get time info for a specific period
  const getTimeForPeriod = (periodNumber) => {
    const times = getPeriodTimes();
    return times.find(t => 
      t.period === periodNumber ||
      (t.period === 'Break' && (periodNumber === 'Break' || periodNumber === 'Break1' || periodNumber === 'Break2' || periodNumber === 'Break3')) ||
      (t.period === 'Break1' && periodNumber === 'Break1') ||
      (t.period === 'Break2' && periodNumber === 'Break2') ||
      (t.period === 'Break3' && periodNumber === 'Break3') ||
      (t.period === 'Lunch' && periodNumber === 'Lunch')
    ) || { start: '', end: '' };
  };

  useEffect(() => {
    if (initialData.periods && initialData.periods.length > 0) {
      setPeriods(initialData.periods);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePeriodFormChange = (e) => {
    const { name, value } = e.target;
    setPeriodForm(prev => ({ ...prev, [name]: value }));
    
    if (name === 'subjectType') {
      if (value === 'Break' || value === 'Lunch') {
        setPeriodForm(prev => ({ ...prev, staffName: '', roomNumber: '' }));
      }
    }
  };

  const validatePeriod = () => {
    const newErrors = {};
    
    if (!periodForm.subjectCode && periodForm.subjectType !== 'Break' && periodForm.subjectType !== 'Lunch') {
      newErrors.subjectCode = 'Subject Code is required';
    }
    if (!periodForm.subjectName && periodForm.subjectType !== 'Break' && periodForm.subjectType !== 'Lunch') {
      newErrors.subjectName = 'Subject Name is required';
    }
    if (!periodForm.staffName && periodForm.subjectType !== 'Break' && periodForm.subjectType !== 'Lunch') {
      newErrors.staffName = 'Staff Name is required';
    }
    
    const existingPeriod = periods.find(p => 
      p.day === periodForm.day && 
      p.periodNumber === periodForm.periodNumber &&
      p !== periods[editingIndex]
    );
    if (existingPeriod) {
      newErrors.periodNumber = 'This period already has a subject assigned';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddPeriod = () => {
    if (!validatePeriod()) return;

    const timeInfo = getTimeForPeriod(periodForm.periodNumber);
    
    const newPeriod = {
      ...periodForm,
      startTime: timeInfo?.start || '',
      endTime: timeInfo?.end || '',
      id: editingIndex >= 0 ? editingIndex : Date.now()
    };

    if (editingIndex >= 0) {
      const updatedPeriods = [...periods];
      updatedPeriods[editingIndex] = newPeriod;
      setPeriods(updatedPeriods);
      setEditingIndex(-1);
    } else {
      setPeriods([...periods, newPeriod]);
    }

    setPeriodForm({
      day: 'Monday',
      periodNumber: 1,
      subjectCode: '',
      subjectName: '',
      subjectType: 'Theory',
      staffName: '',
      roomNumber: ''
    });
  };

  const handleEditPeriod = (index) => {
    const period = periods[index];
    setPeriodForm({
      day: period.day,
      periodNumber: period.periodNumber,
      subjectCode: period.subjectCode,
      subjectName: period.subjectName,
      subjectType: period.subjectType,
      staffName: period.staffName,
      roomNumber: period.roomNumber
    });
    setEditingIndex(index);
  };

  const handleDeletePeriod = (index) => {
    setPeriods(periods.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(-1);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.academicYear) newErrors.academicYear = 'Academic Year is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.semester) newErrors.semester = 'Semester is required';
    if (!formData.section) newErrors.section = 'Section is required';
    if (!formData.effectiveDate) newErrors.effectiveDate = 'Effective Date is required';
    
    if (periods.length === 0) newErrors.periods = 'Please add at least one period';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = () => {
    if (!validateForm()) return;
    
    onGenerate({
      ...formData,
      periods: periods
    });
  };

  const isBreakOrLunch = periodForm.subjectType === 'Break' || periodForm.subjectType === 'Lunch';

  const getBadgeClass = (type) => {
    switch (type) {
      case 'Theory': return 'badge-theory';
      case 'Lab': return 'badge-lab';
      case 'Break': return 'badge-break';
      case 'Lunch': return 'badge-lunch';
      case 'Free Period': return 'badge-free';
      default: return '';
    }
  };

  const getPeriodLabel = (period) => {
    if (typeof period === 'number') return `Period ${period}`;
    if (period === 'Break' || period === 'Break2') return 'Break';
    if (period === 'Lunch') return 'Lunch';
    return period;
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Student Timetable</h2>
      <p className="form-subtitle">Fill in the details below to create a new timetable for your class</p>

      <div className="form-section">
        <h3 className="form-section-title">Academic Information</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Academic Year</label>
            <select
              name="academicYear"
              className="form-select"
              value={formData.academicYear}
              onChange={handleInputChange}
              disabled={isReadOnly}
            >
              <option value="">Select Year</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2025-2026">2025-2026</option>
              <option value="2026-2027">2026-2027</option>
            </select>
            {errors.academicYear && <span className="error">{errors.academicYear}</span>}
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              className="form-select"
              value={formData.department}
              onChange={handleInputChange}
              disabled={isReadOnly}
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="Electrical">Electrical</option>
            </select>
            {errors.department && <span className="error">{errors.department}</span>}
          </div>

          <div className="form-group">
            <label>Year</label>
            <select
              name="year"
              className="form-select"
              value={formData.year}
              onChange={handleInputChange}
              disabled={isReadOnly}
            >
              <option value="">Select Year</option>
              <option value="I Year">I Year</option>
              <option value="II Year">II Year</option>
              <option value="III Year">III Year</option>
              <option value="IV Year">IV Year</option>
            </select>
            {errors.year && <span className="error">{errors.year}</span>}
          </div>

          <div className="form-group">
            <label>Semester</label>
            <select
              name="semester"
              className="form-select"
              value={formData.semester}
              onChange={handleInputChange}
              disabled={isReadOnly}
            >
              <option value="">Select Semester</option>
              <option value="I">I Semester</option>
              <option value="II">II Semester</option>
              <option value="III">III Semester</option>
              <option value="IV">IV Semester</option>
              <option value="V">V Semester</option>
              <option value="VI">VI Semester</option>
              <option value="VII">VII Semester</option>
              <option value="VIII">VIII Semester</option>
            </select>
            {errors.semester && <span className="error">{errors.semester}</span>}
          </div>

          <div className="form-group">
            <label>Section</label>
            <select
              name="section"
              className="form-select"
              value={formData.section}
              onChange={handleInputChange}
              disabled={isReadOnly}
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
            {errors.section && <span className="error">{errors.section}</span>}
          </div>

          <div className="form-group">
            <label>Effective Date</label>
            <input
              type="date"
              name="effectiveDate"
              className="form-input"
              value={formData.effectiveDate}
              onChange={handleInputChange}
              disabled={isReadOnly}
            />
            {errors.effectiveDate && <span className="error">{errors.effectiveDate}</span>}
          </div>
        </div>
      </div>

      <div className="period-form">
        <h3 className="period-form-title">Period Allocation</h3>
        
        <div className="form-section" style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#64748B', marginBottom: '12px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Select Day</label>
          <div className="day-selector">
            {DAYS.map(day => (
              <button
                key={day}
                type="button"
                className={`day-pill ${periodForm.day === day ? 'active' : ''}`}
                onClick={() => setPeriodForm(prev => ({ ...prev, day }))}
                disabled={isReadOnly}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Period</label>
            <select
              name="periodNumber"
              className="form-select"
              value={periodForm.periodNumber}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly}
            >
              {getPeriodTimes().map(time => (
                <option key={time.period} value={time.period}>
                  {time.label} ({time.start} - {time.end})
                </option>
              ))}
            </select>
            {errors.periodNumber && <span className="error">{errors.periodNumber}</span>}
          </div>

          <div className="form-group">
            <label>Subject Type</label>
            <select
              name="subjectType"
              className="form-select"
              value={periodForm.subjectType}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly}
            >
              {SUBJECT_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Subject Code</label>
            <input
              type="text"
              name="subjectCode"
              className="form-input"
              placeholder="e.g., CS301"
              value={periodForm.subjectCode}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly || isBreakOrLunch}
            />
            {errors.subjectCode && <span className="error">{errors.subjectCode}</span>}
          </div>

          <div className="form-group">
            <label>Subject Name</label>
            <input
              type="text"
              name="subjectName"
              className="form-input"
              placeholder="e.g., Data Structures"
              value={periodForm.subjectName}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly || isBreakOrLunch}
            />
            {errors.subjectName && <span className="error">{errors.subjectName}</span>}
          </div>

          <div className="form-group">
            <label>Staff Name</label>
            <input
              type="text"
              name="staffName"
              className="form-input"
              placeholder="e.g., Dr. John Smith"
              value={periodForm.staffName}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly || isBreakOrLunch}
            />
            {errors.staffName && <span className="error">{errors.staffName}</span>}
          </div>

          <div className="form-group">
            <label>Room / Lab Number</label>
            <input
              type="text"
              name="roomNumber"
              className="form-input"
              placeholder="e.g., Room 101 / Lab 3"
              value={periodForm.roomNumber}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly || isBreakOrLunch}
            />
          </div>
        </div>

        <div style={{ marginTop: '24px' }}>
          <button
            className="btn btn-primary"
            onClick={handleAddPeriod}
            disabled={isReadOnly}
          >
            {editingIndex >= 0 ? '✏️ Update Period' : '➕ Add Period'}
          </button>
        </div>

        {errors.periods && (
          <div style={{ marginTop: '16px', color: '#EF4444', fontSize: '14px', fontWeight: '500' }}>
            {errors.periods}
          </div>
        )}

        <div className="period-list">
          <h4 className="period-list-title">Added Periods ({periods.length})</h4>
          
          {periods.length === 0 ? (
            <div className="empty-periods">
              <div className="empty-periods-icon">📋</div>
              <p>No periods added yet. Add periods using the form above.</p>
            </div>
          ) : (
            periods.map((period, index) => {
              const timeInfo = getTimeForPeriod(period.periodNumber);
              return (
                <div key={period.id} className="period-card">
                  <div className="period-info">
                    <div className="period-number">{period.periodNumber}</div>
                    <div className="period-details">
                      <div className="period-subject">
                        {period.subjectType === 'Break' || period.subjectType === 'Lunch' 
                          ? period.subjectType 
                          : `${period.subjectCode} - ${period.subjectName}`}
                        <span className={`subject-badge ${getBadgeClass(period.subjectType)}`}>
                          {period.subjectType}
                        </span>
                      </div>
                      <div className="period-meta">
                        <span>📅 {period.day}</span>
                        <span>🕐 {timeInfo?.start} - {timeInfo?.end}</span>
                        {period.staffName && <span>👤 {period.staffName}</span>}
                        {period.roomNumber && <span>📍 {period.roomNumber}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="period-actions">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleEditPeriod(index)}
                      disabled={isReadOnly}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeletePeriod(index)}
                      disabled={isReadOnly}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
        <button
          className="btn btn-success"
          onClick={handleGenerate}
          disabled={isReadOnly}
        >
          🚀 Generate Timetable
        </button>
      </div>
    </div>
  );
};

export default TimetableForm;
