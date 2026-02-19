const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Faculty = sequelize.define('faculty', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  employee_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  designation: {
    type: DataTypes.STRING(50),
    defaultValue: 'Assistant Professor'
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'faculties',
  timestamps: true,
  underscored: true
});

module.exports = Faculty;
