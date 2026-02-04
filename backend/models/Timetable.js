const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  academicYear: {
    type: String,
    required: true,
    // Example: "2024-2025"
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  year: {
    type: String,
    enum: ['First Year', 'Second Year', 'Third Year', 'Final Year'],
    required: true
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  section: {
    type: String,
    enum: ['A', 'B', 'C'],
    default: 'A'
  },
  effectiveFrom: {
    type: Date,
    required: true
  },
  totalPeriods: {
    type: Number,
    default: 42 // 7 periods × 6 days
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'REJECTED'],
    default: 'DRAFT'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  forwardedToRole: {
    type: String,
    enum: ['CLASS_INCHARGE', 'HOD', null],
    default: null
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  approvedAt: {
    type: Date,
    default: null
  },
  rejectedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  rejectedAt: {
    type: Date,
    default: null
  },
  rejectionReason: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Indexes for efficient querying
timetableSchema.index({ departmentId: 1, status: 1 });
timetableSchema.index({ classId: 1, status: 1 });
timetableSchema.index({ status: 1 });
timetableSchema.index({ createdBy: 1 });
timetableSchema.index({ academicYear: 1, departmentId: 1, year: 1, section: 1 });

module.exports = mongoose.model('Timetable', timetableSchema);
