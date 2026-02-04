const express = require('express');
const router = express.Router();
const Timetable = require('../models/Timetable');
const TimetablePeriod = require('../models/TimetablePeriod');

// Time structure constants
const PERIOD_TIMES = {
  P1: { start: '09:30', end: '10:20' },
  P2: { start: '10:20', end: '11:10' },
  BREAK1: { start: '11:10', end: '11:30' },
  P3: { start: '11:30', end: '12:25' },
  LUNCH: { start: '12:25', end: '01:10' },
  P4: { start: '01:10', end: '02:00' },
  P5: { start: '02:00', end: '02:20' },
  BREAK2: { start: '02:20', end: '03:10' },
  P6: { start: '03:10', end: '04:00' },
  P7: { start: '04:00', end: '04:45' }
};

// @route   GET /api/timetables/drafts
// @desc    Get all draft timetables for a department
// @access  Private
router.get('/drafts', async (req, res) => {
  try {
    const { departmentId, userId } = req.query;
    
    let query = { status: 'DRAFT' };
    
    // Filter by department if provided
    if (departmentId) {
      query.departmentId = departmentId;
    }
    
    // Filter by user if provided (only show user's drafts)
    if (userId) {
      query.createdBy = userId;
    }
    
    const drafts = await Timetable.find(query)
      .populate('departmentId', 'departmentCode departmentName')
      .populate('classId')
      .populate('createdBy', 'name email')
      .sort({ updatedAt: -1 });
    
    // Group drafts by year
    const groupedDrafts = {
      'First Year': [],
      'Second Year': [],
      'Third Year': [],
      'Final Year': []
    };
    
    drafts.forEach(draft => {
      if (groupedDrafts[draft.year]) {
        groupedDrafts[draft.year].push(draft);
      }
    });
    
    res.json({
      success: true,
      count: drafts.length,
      groupedDrafts
    });
  } catch (error) {
    console.error('Error fetching drafts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching draft timetables',
      error: error.message
    });
  }
});

// @route   GET /api/timetables/pending-approvals
// @desc    Get timetables pending approval for HOD/Class Incharge
// @access  Private (HOD/Class Incharge)
router.get('/pending-approvals', async (req, res) => {
  try {
    const { departmentId, role } = req.query;
    
    let query = { status: 'PENDING_APPROVAL' };
    
    // Filter by department
    if (departmentId) {
      query.departmentId = departmentId;
    }
    
    // Filter by forwarded role
    if (role && ['CLASS_INCHARGE', 'HOD'].includes(role)) {
      query.forwardedToRole = role;
    }
    
    const pendingTimetables = await Timetable.find(query)
      .populate('departmentId', 'departmentCode departmentName')
      .populate('classId')
      .populate('createdBy', 'name email')
      .sort({ updatedAt: -1 });
    
    // Group by year
    const groupedTimetables = {
      'First Year': [],
      'Second Year': [],
      'Third Year': [],
      'Final Year': []
    };
    
    pendingTimetables.forEach(timetable => {
      if (groupedTimetables[timetable.year]) {
        groupedTimetables[timetable.year].push(timetable);
      }
    });
    
    res.json({
      success: true,
      count: pendingTimetables.length,
      groupedTimetables
    });
  } catch (error) {
    console.error('Error fetching pending approvals:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching pending approvals',
      error: error.message
    });
  }
});

// @route   GET /api/timetables
// @desc    Get all timetables with optional filters
// @access  Private
router.get('/', async (req, res) => {
  try {
    const { departmentId, classId, year, section, status, academicYear } = req.query;
    
    let query = {};
    
    if (departmentId) query.departmentId = departmentId;
    if (classId) query.classId = classId;
    if (year) query.year = year;
    if (section) query.section = section;
    if (status) query.status = status;
    if (academicYear) query.academicYear = academicYear;
    
    const timetables = await Timetable.find(query)
      .populate('departmentId', 'departmentCode departmentName')
      .populate('classId')
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: timetables.length,
      data: timetables
    });
  } catch (error) {
    console.error('Error fetching timetables:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching timetables',
      error: error.message
    });
  }
});

// @route   GET /api/timetables/:id
// @desc    Get single timetable with periods
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id)
      .populate('departmentId', 'departmentCode departmentName')
      .populate('classId')
      .populate('createdBy', 'name email')
      .populate('approvedBy', 'name email')
      .populate('rejectedBy', 'name email');
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    // Get all periods for this timetable
    const periods = await TimetablePeriod.find({ timetableId: req.params.id })
      .sort({ day: 1, periodNo: 1 });
    
    res.json({
      success: true,
      data: {
        ...timetable.toObject(),
        periods
      }
    });
  } catch (error) {
    console.error('Error fetching timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching timetable',
      error: error.message
    });
  }
});

// @route   POST /api/timetables
// @desc    Create new timetable (as DRAFT)
// @access  Private
router.post('/', async (req, res) => {
  try {
    const {
      academicYear,
      departmentId,
      classId,
      year,
      semester,
      section,
      effectiveFrom,
      periods,
      createdBy
    } = req.body;
    
    // Check if timetable already exists for this combination
    const existingTimetable = await Timetable.findOne({
      academicYear,
      departmentId,
      classId,
      section,
      status: { $in: ['DRAFT', 'PENDING_APPROVAL', 'APPROVED'] }
    });
    
    if (existingTimetable) {
      return res.status(400).json({
        success: false,
        message: 'Timetable already exists for this class. Please edit the existing timetable.'
      });
    }
    
    // Create timetable
    const timetable = new Timetable({
      academicYear,
      departmentId,
      classId,
      year,
      semester,
      section,
      effectiveFrom,
      status: 'DRAFT',
      createdBy,
      totalPeriods: periods.length
    });
    
    await timetable.save();
    
    // Create periods
    const periodDocs = periods.map(period => ({
      timetableId: timetable._id,
      day: period.day,
      periodNo: period.periodNo,
      startTime: PERIOD_TIMES[period.periodNo]?.start || '',
      endTime: PERIOD_TIMES[period.periodNo]?.end || '',
      subjectCode: period.subjectCode || '',
      subjectName: period.subjectName || '',
      facultyName: period.facultyName || '',
      subjectType: period.subjectType || 'Theory',
      roomNumber: period.roomNumber || ''
    }));
    
    await TimetablePeriod.insertMany(periodDocs);
    
    // Fetch complete timetable with periods
    const completeTimetable = await Timetable.findById(timetable._id)
      .populate('departmentId', 'departmentCode departmentName')
      .populate('classId')
      .populate('createdBy', 'name email');
    
    const timetablePeriods = await TimetablePeriod.find({ timetableId: timetable._id })
      .sort({ day: 1, periodNo: 1 });
    
    res.status(201).json({
      success: true,
      message: 'Timetable saved as draft successfully',
      data: {
        ...completeTimetable.toObject(),
        periods: timetablePeriods
      }
    });
  } catch (error) {
    console.error('Error creating timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating timetable',
      error: error.message
    });
  }
});

// @route   PUT /api/timetables/:id
// @desc    Update timetable (only if DRAFT or REJECTED)
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    // Only DRAFT or REJECTED timetables can be edited
    if (!['DRAFT', 'REJECTED'].includes(timetable.status)) {
      return res.status(400).json({
        success: false,
        message: 'Cannot edit timetable in current status'
      });
    }
    
    const { periods, ...updateData } = req.body;
    
    // Update timetable
    await Timetable.findByIdAndUpdate(req.params.id, updateData);
    
    // Update periods if provided
    if (periods && Array.isArray(periods)) {
      // Delete existing periods
      await TimetablePeriod.deleteMany({ timetableId: req.params.id });
      
      // Create new periods
      const periodDocs = periods.map(period => ({
        timetableId: timetable._id,
        day: period.day,
        periodNo: period.periodNo,
        startTime: PERIOD_TIMES[period.periodNo]?.start || '',
        endTime: PERIOD_TIMES[period.periodNo]?.end || '',
        subjectCode: period.subjectCode || '',
        subjectName: period.subjectName || '',
        facultyName: period.facultyName || '',
        subjectType: period.subjectType || 'Theory',
        roomNumber: period.roomNumber || ''
      }));
      
      await TimetablePeriod.insertMany(periodDocs);
    }
    
    // Fetch updated timetable
    const updatedTimetable = await Timetable.findById(req.params.id)
      .populate('departmentId', 'departmentCode departmentName')
      .populate('classId')
      .populate('createdBy', 'name email');
    
    const timetablePeriods = await TimetablePeriod.find({ timetableId: req.params.id })
      .sort({ day: 1, periodNo: 1 });
    
    res.json({
      success: true,
      message: 'Timetable updated successfully',
      data: {
        ...updatedTimetable.toObject(),
        periods: timetablePeriods
      }
    });
  } catch (error) {
    console.error('Error updating timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating timetable',
      error: error.message
    });
  }
});

// @route   POST /api/timetables/:id/forward
// @desc    Forward timetable for approval
// @access  Private (Creator)
router.post('/:id/forward', async (req, res) => {
  try {
    const { forwardedToRole } = req.body; // 'CLASS_INCHARGE' or 'HOD'
    
    const timetable = await Timetable.findById(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    if (timetable.status !== 'DRAFT') {
      return res.status(400).json({
        success: false,
        message: 'Only draft timetables can be forwarded for approval'
      });
    }
    
    if (!['CLASS_INCHARGE', 'HOD'].includes(forwardedToRole)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid forwarding role'
      });
    }
    
    timetable.status = 'PENDING_APPROVAL';
    timetable.forwardedToRole = forwardedToRole;
    
    await timetable.save();
    
    res.json({
      success: true,
      message: `Timetable forwarded to ${forwardedToRole.replace('_', ' ')} for approval`,
      data: timetable
    });
  } catch (error) {
    console.error('Error forwarding timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error forwarding timetable',
      error: error.message
    });
  }
});

// @route   PUT /api/timetables/:id/approve
// @desc    Approve timetable (HOD/Class Incharge)
// @access  Private (HOD/Class Incharge)
router.put('/:id/approve', async (req, res) => {
  try {
    const { approvedBy, userRole } = req.body;
    
    const timetable = await Timetable.findById(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    if (timetable.status !== 'PENDING_APPROVAL') {
      return res.status(400).json({
        success: false,
        message: 'Only pending approval timetables can be approved'
      });
    }
    
    // Verify the approving user has the correct role
    if (timetable.forwardedToRole !== userRole) {
      return res.status(403).json({
        success: false,
        message: `This timetable was forwarded to ${timetable.forwardedToRole}, not ${userRole}`
      });
    }
    
    timetable.status = 'APPROVED';
    timetable.approvedBy = approvedBy;
    timetable.approvedAt = new Date();
    
    await timetable.save();
    
    res.json({
      success: true,
      message: 'Timetable approved successfully',
      data: timetable
    });
  } catch (error) {
    console.error('Error approving timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error approving timetable',
      error: error.message
    });
  }
});

// @route   PUT /api/timetables/:id/reject
// @desc    Reject timetable (HOD/Class Incharge)
// @access  Private (HOD/Class Incharge)
router.put('/:id/reject', async (req, res) => {
  try {
    const { rejectedBy, userRole, reason } = req.body;
    
    const timetable = await Timetable.findById(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    if (timetable.status !== 'PENDING_APPROVAL') {
      return res.status(400).json({
        success: false,
        message: 'Only pending approval timetables can be rejected'
      });
    }
    
    // Verify the rejecting user has the correct role
    if (timetable.forwardedToRole !== userRole) {
      return res.status(403).json({
        success: false,
        message: `This timetable was forwarded to ${timetable.forwardedToRole}, not ${userRole}`
      });
    }
    
    timetable.status = 'REJECTED';
    timetable.rejectedBy = rejectedBy;
    timetable.rejectedAt = new Date();
    timetable.rejectionReason = reason || '';
    
    await timetable.save();
    
    res.json({
      success: true,
      message: 'Timetable rejected. Creator can now edit and resubmit.',
      data: timetable
    });
  } catch (error) {
    console.error('Error rejecting timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error rejecting timetable',
      error: error.message
    });
  }
});

// @route   PUT /api/timetables/:id/resubmit
// @desc    Resubmit rejected timetable as draft
// @access  Private (Creator)
router.put('/:id/resubmit', async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    if (timetable.status !== 'REJECTED') {
      return res.status(400).json({
        success: false,
        message: 'Only rejected timetables can be resubmitted'
      });
    }
    
    timetable.status = 'DRAFT';
    timetable.forwardedToRole = null;
    timetable.rejectionReason = '';
    timetable.rejectedBy = null;
    timetable.rejectedAt = null;
    
    await timetable.save();
    
    res.json({
      success: true,
      message: 'Timetable resubmitted as draft',
      data: timetable
    });
  } catch (error) {
    console.error('Error resubmitting timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error resubmitting timetable',
      error: error.message
    });
  }
});

// @route   DELETE /api/timetables/:id
// @desc    Delete timetable (only if DRAFT)
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const timetable = await Timetable.findById(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    if (timetable.status !== 'DRAFT') {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete timetable in current status'
      });
    }
    
    // Delete all periods
    await TimetablePeriod.deleteMany({ timetableId: req.params.id });
    
    // Delete timetable
    await Timetable.findByIdAndDelete(req.params.id);
    
    res.json({
      success: true,
      message: 'Timetable deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting timetable:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting timetable',
      error: error.message
    });
  }
});

// @route   GET /api/timetables/drafts/count
// @desc    Get draft count for a department
// @access  Private
router.get('/drafts/count', async (req, res) => {
  try {
    const { departmentId } = req.query;
    
    let query = { status: 'DRAFT' };
    
    if (departmentId) {
      query.departmentId = departmentId;
    }
    
    const count = await Timetable.countDocuments(query);
    
    res.json({
      success: true,
      count
    });
  } catch (error) {
    console.error('Error counting drafts:', error);
    res.status(500).json({
      success: false,
      message: 'Error counting drafts',
      error: error.message
    });
  }
});

module.exports = router;
