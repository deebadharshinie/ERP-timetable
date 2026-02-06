import React from 'react';
import './ViewTimetable.css';

// Timing for Third Year & Final Year (existing structure)
const PERIOD_TIMES_NORMAL = [
  { period: 1, start: '09:30', end: '10:20', label: 'P1' },
  { period: 2, start: '10:20', end: '11:10', label: 'P2' },
  { period: 'Break', start: '11:10', end: '11:30', label: 'Break' },
  { period: 3, start: '11:30', end: '12:25', label: 'P3' },
  { period: 'Lunch', start: '12:25', end: '01:10', label: 'Lunch' },
  { period: 4, start: '01:10', end: '02:00', label: 'P4' },
  { period: 5, start: '02:00', end: '02:20', label: 'P5' },
  { period: 'Break2', start: '02:20', end: '03:10', label: 'Break' },
  { period: 6, start: '03:10', end: '04:00', label: 'P6' },
  { period: 7, start: '04:00', end: '04:45', label: 'P7' },
];

// Timing for First Year & Second Year (continuous with breaks after P2, P4, P6)
const PERIOD_TIMES_FIRST_SECOND = [
  { period: 1, start: '09:30', end: '10:20', label: 'P1' },
  { period: 2, start: '10:20', end: '11:10', label: 'P2' },
  { period: 'Break1', start: '11:10', end: '11:30', label: 'Brk' },
  { period: 3, start: '11:30', end: '12:20', label: 'P3' },
  { period: 4, start: '12:20', end: '01:10', label: 'P4' },
  { period: 'Break2', start: '01:10', end: '01:30', label: 'Brk' },
  { period: 'Lunch', start: '01:30', end: '02:10', label: 'Lunch' },
  { period: 5, start: '02:10', end: '03:00', label: 'P5' },
  { period: 6, start: '03:00', end: '03:50', label: 'P6' },
  { period: 'Break3', start: '03:50', end: '04:10', label: 'Brk' },
  { period: 7, start: '04:10', end: '05:00', label: 'P7' },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TimetableGrid = ({ periods, isReadOnly, year }) => {
  // Determine which period times to use based on year
  const isFirstOrSecondYear = year === 'I Year' || year === 'II Year';
  const periodTimes = isFirstOrSecondYear ? PERIOD_TIMES_FIRST_SECOND : PERIOD_TIMES_NORMAL;

  const getPeriodsForDayAndPeriod = (day, period) => {
    return periods.filter(p => p.day === day && p.periodNumber === period);
  };

  const getPeriodClass = (subjectType) => {
    switch (subjectType) {
      case 'Theory':
        return 'period-theory';
      case 'Lab':
        return 'period-lab';
      case 'Break':
        return 'period-break';
      case 'Lunch':
        return 'period-lunch';
      case 'Free Period':
        return 'period-free';
      default:
        return '';
    }
  };

  return (
    <div className="timetable-vertical">
      {/* Header Row - Days on left, Period times as headers */}
      <div className="day-header-cell">Day \ Time</div>
      {periodTimes.map(timeSlot => (
        <div key={timeSlot.period} className="time-header-cell">
          <div className="time-header-label">{timeSlot.label}</div>
          <div className="time-header-range">{timeSlot.start}<br/>{timeSlot.end}</div>
        </div>
      ))}

      {/* Day Rows */}
      {DAYS.map(day => (
        <React.Fragment key={day}>
          {/* Day Column */}
          <div className="day-cell">{day}</div>

          {/* Period Columns */}
          {periodTimes.map(timeSlot => {
            const dayPeriods = getPeriodsForDayAndPeriod(day, timeSlot.period);
            return (
              <div key={`${day}-${timeSlot.period}`} className="day-period-cell">
                {dayPeriods.length > 0 ? (
                  dayPeriods.map((period, idx) => (
                    <div 
                      key={idx} 
                      className={`period-card-vertical ${getPeriodClass(period.subjectType)}`}
                    >
                      {period.subjectType === 'Break' || period.subjectType === 'Lunch' ? (
                        <div className="break-label-vertical">{period.subjectType}</div>
                      ) : (
                        <>
                          <div className="subject-code-vertical">{period.subjectCode}</div>
                          <div className="subject-name-vertical">{period.subjectName}</div>
                          {period.staffName && (
                            <div className="staff-name-vertical">👤 {period.staffName}</div>
                          )}
                          {period.roomNumber && (
                            <div className="room-number-vertical">📍 {period.roomNumber}</div>
                          )}
                        </>
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
