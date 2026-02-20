const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const TimeSlot = sequelize.define('time_slot', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  period_number: {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true
  }
}, {
  tableName: 'time_slots',
  timestamps: false,
  underscored: true
});

module.exports = TimeSlot;
