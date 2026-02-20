const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// @route   GET /api/departments
// @desc    Get all departments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { is_active } = req.query;
    
    let where = {};
    
    if (is_active !== undefined) where.is_active = is_active === 'true';
    
    const departments = await Department.findAll({
      where,
      order: [['department_name', 'ASC']]
    });
    
    res.json({
      success: true,
      count: departments.length,
      data: departments
    });
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching departments',
      error: error.message
    });
  }
});

// @route   GET /api/departments/:id
// @desc    Get single department
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    
    if (!department) {
      return res.status(404).json({
        success: false,
        message: 'Department not found'
      });
    }
    
    res.json({
      success: true,
      data: department
    });
  } catch (error) {
    console.error('Error fetching department:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching department',
      error: error.message
    });
  }
});

// @route   POST /api/departments
// @desc    Create new department
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { department_code, department_name } = req.body;
    
    if (!department_code || !department_name) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: department_code, department_name'
      });
    }
    
    const department = await Department.create({
      department_code,
      department_name
    });
    
    res.status(201).json({
      success: true,
      message: 'Department created successfully',
      data: department
    });
  } catch (error) {
    console.error('Error creating department:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating department',
      error: error.message
    });
  }
});

// @route   PUT /api/departments/:id
// @desc    Update department
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    
    if (!department) {
      return res.status(404).json({
        success: false,
        message: 'Department not found'
      });
    }
    
    const { department_code, department_name, is_active } = req.body;
    
    await department.update({
      department_code: department_code || department.department_code,
      department_name: department_name || department.department_name,
      is_active: is_active !== undefined ? is_active : department.is_active
    });
    
    res.json({
      success: true,
      message: 'Department updated successfully',
      data: department
    });
  } catch (error) {
    console.error('Error updating department:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating department',
      error: error.message
    });
  }
});

// @route   DELETE /api/departments/:id
// @desc    Delete department
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    
    if (!department) {
      return res.status(404).json({
        success: false,
        message: 'Department not found'
      });
    }
    
    await department.destroy();
    
    res.json({
      success: true,
      message: 'Department deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting department:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting department',
      error: error.message
    });
  }
});

module.exports = router;
