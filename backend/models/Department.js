const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Department = sequelize.define('department', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  department_code: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  },
  department_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'departments',
  timestamps: true,
  underscored: true
});

module.exports = Department;
