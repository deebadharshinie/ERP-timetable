const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  year: {
    type: String,
    enum: ['First Year', 'Second Year', 'Third Year', 'Final Year'],
    required: true
  },
  section: {
    type: String,
    enum: ['A', 'B', 'C'],
    default: 'A'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Compound index for department + year + section
classSchema.index({ departmentId: 1, year: 1, section: 1 }, { unique: true });

module.exports = mongoose.model('Class', classSchema);
