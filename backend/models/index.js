const { sequelize } = require('../config/db');

// Import all models (just definitions, no associations yet)
const TimeSlot = require('./TimeSlot');
const Timetable = require('./Timetable');
const TimetablePeriod = require('./TimetablePeriod');
const Class = require('./Class');
const Department = require('./Department');
const Faculty = require('./Faculty');
const Room = require('./Room');
const Subject = require('./Subject');
const User = require('./User');

// Define associations here after all models are loaded
// TimeSlot associations
TimeSlot.hasMany(Timetable, { foreignKey: 'time_slot_id', as: 'timetables' });

// Timetable associations
Timetable.belongsTo(TimeSlot, { foreignKey: 'time_slot_id', as: 'timeSlot' });
Timetable.belongsTo(Class, { foreignKey: 'class_id', as: 'class' });
Timetable.belongsTo(Subject, { foreignKey: 'subject_id', as: 'subject' });
Timetable.belongsTo(Faculty, { foreignKey: 'faculty_id', as: 'faculty' });
Timetable.belongsTo(Room, { foreignKey: 'room_id', as: 'room' });
Timetable.hasMany(TimetablePeriod, { foreignKey: 'timetable_id', as: 'periods' });

// TimetablePeriod associations
TimetablePeriod.belongsTo(Timetable, { foreignKey: 'timetable_id', as: 'timetable' });

// Class associations
Class.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });
Class.hasMany(Timetable, { foreignKey: 'class_id', as: 'timetables' });

// Department associations
Department.hasMany(Class, { foreignKey: 'department_id', as: 'classes' });
Department.hasMany(Faculty, { foreignKey: 'department_id', as: 'faculties' });

// Faculty associations
Faculty.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });
Faculty.hasMany(Timetable, { foreignKey: 'faculty_id', as: 'timetables' });

// Room associations
Room.hasMany(Timetable, { foreignKey: 'room_id', as: 'timetables' });

// Subject associations
Subject.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });
Subject.hasMany(Timetable, { foreignKey: 'subject_id', as: 'timetables' });

// Export all models
module.exports = {
  sequelize,
  TimeSlot,
  Timetable,
  TimetablePeriod,
  Class,
  Department,
  Faculty,
  Room,
  Subject,
  User
};
