import React, { useState, useEffect } from 'react';
import { departmentAPI, classAPI, subjectAPI, facultyAPI, roomAPI, timetableAPI } from '../services/api';

// Time slots matching the database schema (from time_slots table)
const DEFAULT_TIME_SLOTS = [
  { id: 1, start_time: '09:00:00', end_time: '10:00:00', period_number: 1, label: 'Period 1 (09:00 - 10:00)' },
  { id: 2, start_time: '10:00:00', end_time: '11:00:00', period_number: 2, label: 'Period 2 (10:00 - 11:00)' },
  { id: 3, start_time: '11:15:00', end_time: '12:15:00', period_number: 3, label: 'Period 3 (11:15 - 12:15)' },
  { id: 4, start_time: '13:15:00', end_time: '14:15:00', period_number: 4, label: 'Period 4 (13:15 - 14:15)' },
  { id: 5, start_time: '14:15:00', end_time: '15:15:00', period_number: 5, label: 'Period 5 (14:15 - 15:15)' },
  { id: 6, start_time: '15:30:00', end_time: '16:30:00', period_number: 6, label: 'Period 6 (15:30 - 16:30)' },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SUBJECT_TYPES = ['Theory', 'Lab'];

const TimetableForm = ({ onGenerate, initialData, isReadOnly }) => {
  const [departments, setDepartments] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [timeSlots, setTimeSlots] = useState(DEFAULT_TIME_SLOTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Faculty from EduVertex
  const [eduvertexFaculties, setEduvertexFaculties] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const [formData, setFormData] = useState({
    academicYear: '',
    semester: '',
    ...initialData
  });

  const [periodForm, setPeriodForm] = useState({
    day: 'Monday',
    timeSlotId: 1,
    subjectId: '',
    facultyId: '',
    roomId: '',
    subjectType: 'Theory'
  });

  const [periods, setPeriods] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [errors, setErrors] = useState({});

  // Fetch initial data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch departments
        const deptResponse = await departmentAPI.getAll({ is_active: true });
        if (deptResponse.success) {
          setDepartments(deptResponse.data);
        }

        // Fetch time slots
        const slotsResponse = await timetableAPI.getTimeSlots();
        if (slotsResponse.success && slotsResponse.data.length > 0) {
          setTimeSlots(slotsResponse.data.map(slot => ({
            ...slot,
            label: `Period ${slot.period_number} (${slot.start_time} - ${slot.end_time})`
          })));
        }

        // Fetch rooms
        const roomsResponse = await roomAPI.getAll({ is_available: true });
        if (roomsResponse.success) {
          setRooms(roomsResponse.data);
        }

        // Fetch faculty directly from EduVertex
        try {
          const facultyResponse = await facultyAPI.getFromEduvertex();
          if (facultyResponse.success) {
            setEduvertexFaculties(facultyResponse.data);
          }
        } catch (facultyErr) {
          console.log('Could not fetch from EduVertex, using local faculties');
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Using default values.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch classes when department changes
  useEffect(() => {
    const fetchClasses = async () => {
      if (formData.department) {
        try {
          const response = await classAPI.getAll({ department_id: formData.department });
          if (response.success) {
            setClasses(response.data);
          }
        } catch (err) {
          console.error('Error fetching classes:', err);
        }
      }
    };
    fetchClasses();
  }, [formData.department]);

  // Fetch subjects when department changes
  useEffect(() => {
    const fetchSubjects = async () => {
      if (formData.department) {
        try {
          const response = await subjectAPI.getAll({ department_id: formData.department });
          if (response.success) {
            setSubjects(response.data);
          }
        } catch (err) {
          console.error('Error fetching subjects:', err);
        }
      }
    };
    fetchSubjects();
  }, [formData.department]);

  // Filter faculties by department
  const filteredFaculties = selectedDepartment 
    ? eduvertexFaculties.filter(f => f.department_id === parseInt(selectedDepartment))
    : eduvertexFaculties;

  // Get unique departments from faculty data
  const facultyDepartments = [...new Map(eduvertexFaculties.map(f => [f.department_id, { id: f.department_id, name: f.department_id }])).values()];

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
  };

  const getTimeSlotById = (id) => {
    return timeSlots.find(ts => ts.id === parseInt(id)) || timeSlots[0];
  };

  const getSubjectById = (id) => {
    return subjects.find(s => s.id === parseInt(id));
  };

  const getFacultyById = (id) => {
    const eduFaculty = eduvertexFaculties.find(f => f.id === parseInt(id));
    if (eduFaculty) return eduFaculty;
    return faculties.find(f => f.id === parseInt(id));
  };

  const getRoomById = (id) => {
    return rooms.find(r => r.id === parseInt(id));
  };

  const validatePeriod = () => {
    const newErrors = {};
    
    if (!periodForm.subjectId) {
      newErrors.subjectId = 'Subject is required';
    }
    if (!periodForm.facultyId) {
      newErrors.facultyId = 'Faculty is required';
    }
    
    const existingPeriod = periods.find(p => 
      p.day === periodForm.day && 
      p.time_slot_id === parseInt(periodForm.timeSlotId) &&
      p !== periods[editingIndex]
    );
    if (existingPeriod) {
      newErrors.timeSlotId = 'This time slot already has a subject assigned';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddPeriod = () => {
    if (!validatePeriod()) return;

    const timeSlot = getTimeSlotById(periodForm.timeSlotId);
    const subject = getSubjectById(periodForm.subjectId);
    const faculty = getFacultyById(periodForm.facultyId);
    const room = periodForm.roomId ? getRoomById(periodForm.roomId) : null;
    
    const newPeriod = {
      ...periodForm,
      time_slot_id: parseInt(periodForm.timeSlotId),
      subject_id: parseInt(periodForm.subjectId),
      faculty_id: parseInt(periodForm.facultyId),
      room_id: periodForm.roomId ? parseInt(periodForm.roomId) : null,
      start_time: timeSlot.start_time,
      end_time: timeSlot.end_time,
      subject_code: subject?.subject_code || '',
      subject_name: subject?.subject_name || '',
      faculty_name: faculty?.name || '',
      room_number: room?.room_number || '',
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
      timeSlotId: 1,
      subjectId: '',
      facultyId: '',
      roomId: '',
      subjectType: 'Theory'
    });
  };

  const handleEditPeriod = (index) => {
    const period = periods[index];
    setPeriodForm({
      day: period.day,
      timeSlotId: period.time_slot_id,
      subjectId: period.subject_id,
      facultyId: period.faculty_id,
      roomId: period.room_id || '',
      subjectType: period.subject_type || 'Theory'
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
    if (!formData.semester) newErrors.semester = 'Semester is required';
    
    if (periods.length === 0) newErrors.periods = 'Please add at least one period';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerate = () => {
    if (!validateForm()) return;
    
    const semesterValue = formData.semester.includes('-') 
      ? formData.semester 
      : `${formData.academicYear.split('-')[0]}-${formData.semester}`;
    
    onGenerate({
      academicYear: formData.academicYear,
      semester: semesterValue,
      periods: periods
    });
  };

  const getBadgeClass = (type) => {
    switch (type) {
      case 'Theory': return 'badge-theory';
      case 'Lab': return 'badge-lab';
      default: return '';
    }
  };

  const getFacultyDepartmentName = (deptId) => {
    const dept = facultyDepartments.find(d => d.id === deptId);
    return dept ? `Department ${deptId}` : 'Unknown Department';
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedFaculty(null);
  };

  const handleFacultyChange = (e) => {
    const facultyId = e.target.value;
    if (facultyId) {
      const faculty = eduvertexFaculties.find(f => f.id === parseInt(facultyId));
      setSelectedFaculty(faculty);
    } else {
      setSelectedFaculty(null);
    }
  };

  if (loading) {
    return (
      <div className="form-container">
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Loading data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Create Student Timetable</h2>
      <p className="form-subtitle">Fill in the details below to create a new timetable for your class</p>

      {error && (
        <div style={{ padding: '12px', background: '#FEF2F2', color: '#DC2626', borderRadius: '6px', marginBottom: '20px' }}>
          {error}
        </div>
      )}

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
              className="form-select"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              disabled={isReadOnly}
            >
              <option value="">Select Department</option>
              {facultyDepartments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {getFacultyDepartmentName(dept.id)}
                </option>
              ))}
            </select>
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
              <option value="Odd">Odd Semester (I, III, V, VII)</option>
              <option value="Even">Even Semester (II, IV, VI, VIII)</option>
            </select>
            {errors.semester && <span className="error">{errors.semester}</span>}
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
            <label>Time Slot</label>
            <select
              name="timeSlotId"
              className="form-select"
              value={periodForm.timeSlotId}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly}
            >
              {timeSlots.map(slot => (
                <option key={slot.id} value={slot.id}>
                  {slot.label}
                </option>
              ))}
            </select>
            {errors.timeSlotId && <span className="error">{errors.timeSlotId}</span>}
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
            <label>Subject</label>
            <select
              name="subjectId"
              className="form-select"
              value={periodForm.subjectId}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly}
            >
              <option value="">Select Subject</option>
              {subjects.map(subject => (
                <option key={subject.id} value={subject.id}>
                  {subject.subject_code} - {subject.subject_name}
                </option>
              ))}
            </select>
            {errors.subjectId && <span className="error">{errors.subjectId}</span>}
          </div>

          <div className="form-group">
            <label>Faculty (From EduVertex)</label>
            <select
              name="facultyId"
              className="form-select"
              value={periodForm.facultyId}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly}
            >
              <option value="">Select Faculty</option>
              {filteredFaculties.map(faculty => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name} {faculty.designation ? `(${faculty.designation})` : ''}
                </option>
              ))}
            </select>
            {errors.facultyId && <span className="error">{errors.facultyId}</span>}
          </div>

          <div className="form-group">
            <label>Room (Optional)</label>
            <select
              name="roomId"
              className="form-select"
              value={periodForm.roomId}
              onChange={handlePeriodFormChange}
              disabled={isReadOnly}
            >
              <option value="">Select Room</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>
                  {room.room_number} ({room.room_type})
                </option>
              ))}
            </select>
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
              const timeSlot = getTimeSlotById(period.time_slot_id);
              return (
                <div key={period.id} className="period-card">
                  <div className="period-info">
                    <div className="period-number">{timeSlot?.period_number || period.time_slot_id}</div>
                    <div className="period-details">
                      <div className="period-subject">
                        {period.subject_code} - {period.subject_name}
                        <span className={`subject-badge ${getBadgeClass(period.subjectType)}`}>
                          {period.subjectType}
                        </span>
                      </div>
                      <div className="period-meta">
                        <span>📅 {period.day}</span>
                        <span>🕐 {timeSlot?.start_time} - {timeSlot?.end_time}</span>
                        {period.faculty_name && <span>👤 {period.faculty_name}</span>}
                        {period.room_number && <span>📍 {period.room_number}</span>}
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
