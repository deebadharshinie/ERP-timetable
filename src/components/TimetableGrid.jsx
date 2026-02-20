import React from 'react';
import './ViewTimetable.css';

// Time slots matching the database schema (from time_slots table)
const DEFAULT_TIME_SLOTS = [
  { id: 1, start_time: '09:00:00', end_time: '10:00:00', period_number: 1, label: 'P1' },
  { id: 2, start_time: '10:00:00', end_time: '11:00:00', period_number: 2, label: 'P2' },
  { id: 3, start_time: '11:15:00', end_time: '12:15:00', period_number: 3, label: 'P3' },
  { id: 4, start_time: '13:15:00', end_time: '14:15:00', period_number: 4, label: 'P4' },
  { id: 5, start_time: '14:15:00', end_time: '15:15:00', period_number: 5, label: 'P5' },
  { id: 6, start_time: '15:30:00', end_time: '16:30:00', period_number: 6, label: 'P6' },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TimetableGrid = ({ periods, isReadOnly, year, timeSlots = DEFAULT_TIME_SLOTS }) => {
  // Use provided time slots or default
  const periodTimes = timeSlots.length > 0 ? timeSlots : DEFAULT_TIME_SLOTS;

  const getPeriodsForDayAndPeriod = (day, periodNumber) => {
    return periods.filter(p => p.day === day && p.time_slot_id === periodNumber);
  };

  const getPeriodClass = (subjectType) => {
    switch (subjectType) {
      case 'Theory':
        return 'period-theory';
      case 'Lab':
        return 'period-lab';
      default:
        return '';
    }
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    // Convert HH:MM:SS to HH:MM
    return timeStr.substring(0, 5);
  };

  return (
    <div className="timetable-vertical">
      {/* Header Row - Days on left, Period times as headers */}
      <div className="day-header-cell">Day \ Time</div>
      {periodTimes.map(slot => (
        <div key={slot.id} className="time-header-cell">
          <div className="time-header-label">{slot.label}</div>
          <div className="time-header-range">
            {formatTime(slot.start_time)}<br/>{formatTime(slot.end_time)}
          </div>
        </div>
      ))}

      {/* Day Rows */}
      {DAYS.map(day => (
        <React.Fragment key={day}>
          {/* Day Column */}
          <div className="day-cell">{day}</div>

          {/* Period Columns */}
          {periodTimes.map(slot => {
            const dayPeriods = getPeriodsForDayAndPeriod(day, slot.id);
            return (
              <div key={`${day}-${slot.id}`} className="day-period-cell">
                {dayPeriods.length > 0 ? (
                  dayPeriods.map((period, idx) => (
                    <div 
                      key={idx} 
                      className={`period-card-vertical ${getPeriodClass(period.subjectType)}`}
                    >
                      <div className="subject-code-vertical">{period.subject_code}</div>
                      <div className="subject-name-vertical">{period.subject_name}</div>
                      {period.faculty_name && (
                        <div className="staff-name-vertical">👤 {period.faculty_name}</div>
                      )}
                      {period.room_number && (
                        <div className="room-number-vertical">📍 {period.room_number}</div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="empty-cell-vertical">—</div>
                )}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TimetableGrid;
