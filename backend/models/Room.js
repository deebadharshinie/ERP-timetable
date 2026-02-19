const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Room = sequelize.define('room', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  room_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  room_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  room_type: {
    type: DataTypes.ENUM('Classroom', 'Lab', 'Seminar Hall', 'Auditorium', 'Staff Room'),
    defaultValue: 'Classroom'
  },
  capacity: {
    type: DataTypes.INTEGER,
    defaultValue: 60
  },
  building: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'rooms',
  timestamps: true,
  underscored: true
});

module.exports = Room;
