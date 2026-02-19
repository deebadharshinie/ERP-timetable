const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const TimetablePeriod = sequelize.define('timetable_period', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  timetable_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'timetable',
      key: 'id'
    }
  },
  day: {
    type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    allowNull: false
  },
  period_no: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  start_time: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  end_time: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  subject_code: {
    type: DataTypes.STRING(20),
    defaultValue: ''
  },
  subject_name: {
    type: DataTypes.STRING(100),
    defaultValue: ''
  },
  faculty_name: {
    type: DataTypes.STRING(100),
    defaultValue: ''
  },
  subject_type: {
    type: DataTypes.ENUM('Theory', 'Lab', 'Free Period', 'Break', 'Lunch'),
    defaultValue: 'Theory'
  },
  room_number: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  }
}, {
  tableName: 'timetable_periods',
  timestamps: false,
  underscored: true,
  indexes: [
    { fields: ['timetable_id', 'day', 'period_no'] },
    { fields: ['timetable_id'] }
  ]
});

module.exports = TimetablePeriod;
