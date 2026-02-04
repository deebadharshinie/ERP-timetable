const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  departmentCode: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  departmentName: {
    type: String,
    required: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
departmentSchema.index({ departmentCode: 1 });
departmentSchema.index({ departmentName: 1 });

module.exports = mongoose.model('Department', departmentSchema);
