const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// @route   GET /api/subjects
// @desc    Get all subjects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { department_id, subject_type } = req.query;
    
    let where = {};
    
    if (department_id) where.department_id = department_id;
    if (subject_type) where.subject_type = subject_type;
    
    const subjects = await Subject.findAll({
      where,
      order: [['subject_code', 'ASC']]
    });
    
    res.json({
      success: true,
      count: subjects.length,
      data: subjects
    });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching subjects',
      error: error.message
    });
  }
});

// @route   GET /api/subjects/:id
// @desc    Get single subject
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    
    if (!subject) {
      return res.status(404).json({
        success: false,
        message: 'Subject not found'
      });
    }
    
    res.json({
      success: true,
      data: subject
    });
  } catch (error) {
    console.error('Error fetching subject:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching subject',
      error: error.message
    });
  }
});

// @route   POST /api/subjects
// @desc    Create new subject
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { subject_code, subject_name, department_id, subject_type, credits } = req.body;
    
    if (!subject_code || !subject_name || !department_id) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: subject_code, subject_name, department_id'
      });
    }
    
    const subject = await Subject.create({
      subject_code,
      subject_name,
      department_id,
      subject_type: subject_type || 'Theory',
      credits: credits || 0
    });
    
    res.status(201).json({
      success: true,
      message: 'Subject created successfully',
      data: subject
    });
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating subject',
      error: error.message
    });
  }
});

// @route   PUT /api/subjects/:id
// @desc    Update subject
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    
    if (!subject) {
      return res.status(404).json({
        success: false,
        message: 'Subject not found'
      });
    }
    
    const { subject_code, subject_name, department_id, subject_type, credits, is_active } = req.body;
    
    await subject.update({
      subject_code: subject_code || subject.subject_code,
      subject_name: subject_name || subject.subject_name,
      department_id: department_id || subject.department_id,
      subject_type: subject_type || subject.subject_type,
      credits: credits !== undefined ? credits : subject.credits,
      is_active: is_active !== undefined ? is_active : subject.is_active
    });
    
    res.json({
      success: true,
      message: 'Subject updated successfully',
      data: subject
    });
  } catch (error) {
    console.error('Error updating subject:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating subject',
      error: error.message
    });
  }
});

// @route   DELETE /api/subjects/:id
// @desc    Delete subject
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    
    if (!subject) {
      return res.status(404).json({
        success: false,
        message: 'Subject not found'
      });
    }
    
    await subject.destroy();
    
    res.json({
      success: true,
      message: 'Subject deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting subject:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting subject',
      error: error.message
    });
  }
});

module.exports = router;
