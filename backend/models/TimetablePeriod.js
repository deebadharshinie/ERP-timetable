const mongoose = require('mongoose');

const timetablePeriodSchema = new mongoose.Schema({
  timetableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Timetable',
    required: true
  },
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    required: true
  },
  periodNo: {
    type: String,
    required: true,
    // P1, P2, P3, P4, P5, P6, P7
  },
  startTime: {
    type: String,
    required: true,
    // Example: "09:30"
  },
  endTime: {
    type: String,
    required: true,
    // Example: "10:20"
  },
  subjectCode: {
    type: String,
    trim: true,
    default: ''
  },
  subjectName: {
    type: String,
    trim: true,
    default: ''
  },
  facultyName: {
    type: String,
    trim: true,
    default: ''
  },
  subjectType: {
    type: String,
    enum: ['Theory', 'Lab', 'Free Period', 'Break', 'Lunch'],
    default: 'Theory'
  },
  roomNumber: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: false // Use parent timetable's timestamps
});

// Compound index for efficient querying
timetablePeriodSchema.index({ timetableId: 1, day: 1, periodNo: 1 });
timetablePeriodSchema.index({ timetableId: 1 });

module.exports = mongoose.model('TimetablePeriod', timetablePeriodSchema);
