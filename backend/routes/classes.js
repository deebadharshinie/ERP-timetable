const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// @route   GET /api/classes
// @desc    Get all classes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { department_id, year, semester, section } = req.query;
    
    let where = {};
    
    if (department_id) where.department_id = department_id;
    if (year) where.year = year;
    if (semester) where.semester = semester;
    if (section) where.section = section;
    
    const classes = await Class.findAll({
      where,
      order: [['id', 'DESC']]
    });
    
    res.json({
      success: true,
      count: classes.length,
      data: classes
    });
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching classes',
      error: error.message
    });
  }
});

// @route   GET /api/classes/:id
// @desc    Get single class
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const classItem = await Class.findByPk(req.params.id);
    
    if (!classItem) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    res.json({
      success: true,
      data: classItem
    });
  } catch (error) {
    console.error('Error fetching class:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching class',
      error: error.message
    });
  }
});

// @route   POST /api/classes
// @desc    Create new class
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, department_id, year, section, semester } = req.body;
    
    if (!name || !department_id || !year || !semester) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, department_id, year, semester'
      });
    }
    
    const classItem = await Class.create({
      name,
      department_id,
      year,
      section: section || 'A',
      semester
    });
    
    res.status(201).json({
      success: true,
      message: 'Class created successfully',
      data: classItem
    });
  } catch (error) {
    console.error('Error creating class:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating class',
      error: error.message
    });
  }
});

// @route   PUT /api/classes/:id
// @desc    Update class
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const classItem = await Class.findByPk(req.params.id);
    
    if (!classItem) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    const { name, department_id, year, section, semester, is_active } = req.body;
    
    await classItem.update({
      name: name || classItem.name,
      department_id: department_id || classItem.department_id,
      year: year || classItem.year,
      section: section || classItem.section,
      semester: semester || classItem.semester,
      is_active: is_active !== undefined ? is_active : classItem.is_active
    });
    
    res.json({
      success: true,
      message: 'Class updated successfully',
      data: classItem
    });
  } catch (error) {
    console.error('Error updating class:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating class',
      error: error.message
    });
  }
});

// @route   DELETE /api/classes/:id
// @desc    Delete class
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const classItem = await Class.findByPk(req.params.id);
    
    if (!classItem) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    await classItem.destroy();
    
    res.json({
      success: true,
      message: 'Class deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting class:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting class',
      error: error.message
    });
  }
});

module.exports = router;
