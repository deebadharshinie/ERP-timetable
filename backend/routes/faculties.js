const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// @route   GET /api/faculties
// @desc    Get all faculties
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { department_id, designation } = req.query;
    
    let where = {};
    
    if (department_id) where.department_id = department_id;
    if (designation) where.designation = designation;
    
    const faculties = await Faculty.findAll({
      where,
      order: [['name', 'ASC']]
    });
    
    res.json({
      success: true,
      count: faculties.length,
      data: faculties
    });
  } catch (error) {
    console.error('Error fetching faculties:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching faculties',
      error: error.message
    });
  }
});

// @route   GET /api/faculties/:id
// @desc    Get single faculty
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByPk(req.params.id);
    
    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found'
      });
    }
    
    res.json({
      success: true,
      data: faculty
    });
  } catch (error) {
    console.error('Error fetching faculty:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching faculty',
      error: error.message
    });
  }
});

// @route   POST /api/faculties
// @desc    Create new faculty
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, employee_id, department_id, designation, email, phone } = req.body;
    
    if (!name || !employee_id || !department_id) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, employee_id, department_id'
      });
    }
    
    const faculty = await Faculty.create({
      name,
      employee_id,
      department_id,
      designation: designation || 'Assistant Professor',
      email,
      phone
    });
    
    res.status(201).json({
      success: true,
      message: 'Faculty created successfully',
      data: faculty
    });
  } catch (error) {
    console.error('Error creating faculty:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating faculty',
      error: error.message
    });
  }
});

// @route   PUT /api/faculties/:id
// @desc    Update faculty
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByPk(req.params.id);
    
    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found'
      });
    }
    
    const { name, employee_id, department_id, designation, email, phone, is_active } = req.body;
    
    await faculty.update({
      name: name || faculty.name,
      employee_id: employee_id || faculty.employee_id,
      department_id: department_id || faculty.department_id,
      designation: designation || faculty.designation,
      email: email !== undefined ? email : faculty.email,
      phone: phone !== undefined ? phone : faculty.phone,
      is_active: is_active !== undefined ? is_active : faculty.is_active
    });
    
    res.json({
      success: true,
      message: 'Faculty updated successfully',
      data: faculty
    });
  } catch (error) {
    console.error('Error updating faculty:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating faculty',
      error: error.message
    });
  }
});

// @route   DELETE /api/faculties/:id
// @desc    Delete faculty
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByPk(req.params.id);
    
    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found'
      });
    }
    
    await faculty.destroy();
    
    res.json({
      success: true,
      message: 'Faculty deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting faculty:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting faculty',
      error: error.message
    });
  }
});

module.exports = router;
