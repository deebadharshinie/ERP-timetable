const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Timetable = require('../models/Timetable');
const TimeSlot = require('../models/TimeSlot');

// @route   GET /api/timetables
// @desc    Get all timetables with optional filters
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { classId, semester, dayOfWeek } = req.query;
    
    let where = {};
    
    if (classId) where.class_id = classId;
    if (semester) where.semester = semester;
    if (dayOfWeek) where.day_of_week = dayOfWeek;
    
    const timetables = await Timetable.findAll({
      where,
      order: [['id', 'DESC']]
    });
    
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
// @desc    Get single timetable
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const timetable = await Timetable.findByPk(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    // Get time slot details
    const timeSlot = await TimeSlot.findByPk(timetable.time_slot_id);
    
    res.json({
      success: true,
      data: {
        ...timetable.toJSON(),
        timeSlot
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
// @desc    Create new timetable entry
// @access  Public
router.post('/', async (req, res) => {
  try {
    const {
      class_id,
      subject_id,
      faculty_id,
      day_of_week,
      time_slot_id,
      room_id,
      semester,
      created_by
    } = req.body;
    
    // Validate required fields
    if (!class_id || !subject_id || !faculty_id || !day_of_week || !time_slot_id || !semester) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: class_id, subject_id, faculty_id, day_of_week, time_slot_id, semester'
      });
    }
    
    // Check if time slot exists
    const timeSlot = await TimeSlot.findByPk(time_slot_id);
    if (!timeSlot) {
      return res.status(400).json({
        success: false,
        message: 'Invalid time_slot_id'
      });
    }
    
    // Check for duplicate entry (unique constraint: class_id, day_of_week, time_slot_id)
    const existingEntry = await Timetable.findOne({
      where: {
        class_id,
        day_of_week,
        time_slot_id
      }
    });
    
    if (existingEntry) {
      return res.status(400).json({
        success: false,
        message: 'This time slot is already assigned for this class on this day'
      });
    }
    
    // Create new entry
    const timetable = await Timetable.create({
      class_id,
      subject_id,
      faculty_id,
      day_of_week,
      time_slot_id,
      room_id,
      semester,
      created_by
    });
    
    res.status(201).json({
      success: true,
      message: 'Timetable entry created successfully',
      data: timetable
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
// @desc    Update timetable entry
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const timetable = await Timetable.findByPk(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    const {
      class_id,
      subject_id,
      faculty_id,
      day_of_week,
      time_slot_id,
      room_id,
      semester
    } = req.body;
    
    // If time_slot_id is being changed, verify it exists
    if (time_slot_id) {
      const timeSlot = await TimeSlot.findByPk(time_slot_id);
      if (!timeSlot) {
        return res.status(400).json({
          success: false,
          message: 'Invalid time_slot_id'
        });
      }
    }
    
    // If changing slot, check for duplicates
    if (class_id || day_of_week || time_slot_id) {
      const checkClass = class_id !== undefined ? class_id : timetable.class_id;
      const checkDay = day_of_week !== undefined ? day_of_week : timetable.day_of_week;
      const checkSlot = time_slot_id !== undefined ? time_slot_id : timetable.time_slot_id;
      
      const duplicate = await Timetable.findOne({
        where: {
          class_id: checkClass,
          day_of_week: checkDay,
          time_slot_id: checkSlot,
          id: { [Op.ne]: req.params.id }
        }
      });
      
      if (duplicate) {
        return res.status(400).json({
          success: false,
          message: 'This time slot is already assigned for this class on this day'
        });
      }
    }
    
    // Update entry
    await timetable.update({
      class_id: class_id !== undefined ? class_id : timetable.class_id,
      subject_id: subject_id !== undefined ? subject_id : timetable.subject_id,
      faculty_id: faculty_id !== undefined ? faculty_id : timetable.faculty_id,
      day_of_week: day_of_week !== undefined ? day_of_week : timetable.day_of_week,
      time_slot_id: time_slot_id !== undefined ? time_slot_id : timetable.time_slot_id,
      room_id: room_id !== undefined ? room_id : timetable.room_id,
      semester: semester !== undefined ? semester : timetable.semester
    });
    
    res.json({
      success: true,
      message: 'Timetable entry updated successfully',
      data: timetable
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

// @route   DELETE /api/timetables/:id
// @desc    Delete timetable entry
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const timetable = await Timetable.findByPk(req.params.id);
    
    if (!timetable) {
      return res.status(404).json({
        success: false,
        message: 'Timetable not found'
      });
    }
    
    await timetable.destroy();
    
    res.json({
      success: true,
      message: 'Timetable entry deleted successfully'
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

// @route   GET /api/timetables/by-class/:classId
// @desc    Get all timetables for a specific class
// @access  Public
router.get('/by-class/:classId', async (req, res) => {
  try {
    const { semester } = req.query;
    
    let where = { class_id: req.params.classId };
    if (semester) where.semester = semester;
    
    const timetables = await Timetable.findAll({
      where,
      order: [
        ['day_of_week', 'ASC'],
        ['time_slot_id', 'ASC']
      ]
    });
    
    res.json({
      success: true,
      count: timetables.length,
      data: timetables
    });
  } catch (error) {
    console.error('Error fetching class timetables:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching class timetables',
      error: error.message
    });
  }
});

// @route   GET /api/timetables/time-slots
// @desc    Get all available time slots
// @access  Public
router.get('/slots/all', async (req, res) => {
  try {
    const timeSlots = await TimeSlot.findAll({
      order: [['period_number', 'ASC']]
    });
    
    res.json({
      success: true,
      count: timeSlots.length,
      data: timeSlots
    });
  } catch (error) {
    console.error('Error fetching time slots:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching time slots',
      error: error.message
    });
  }
});

module.exports = router;
