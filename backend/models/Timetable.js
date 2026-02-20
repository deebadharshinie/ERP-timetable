const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Timetable = sequelize.define('timetable', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'classes',
      key: 'id'
    }
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'subjects',
      key: 'id'
    }
  },
  faculty_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'faculties',
      key: 'id'
    }
  },
  day_of_week: {
    type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    allowNull: false
  },
  time_slot_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'time_slots',
      key: 'id'
    }
  },
  room_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'rooms',
      key: 'id'
    }
  },
  semester: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'timetable',
  timestamps: false,
  underscored: true
});

module.exports = Timetable;
