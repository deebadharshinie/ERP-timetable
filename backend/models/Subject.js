const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Subject = sequelize.define('subject', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  subject_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  subject_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subject_type: {
    type: DataTypes.ENUM('Theory', 'Lab', 'Theory/Lab'),
    defaultValue: 'Theory'
  },
  credits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'subjects',
  timestamps: true,
  underscored: true
});

module.exports = Subject;
