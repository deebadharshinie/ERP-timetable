const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// @route   GET /api/rooms
// @desc    Get all rooms
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { room_type, building, is_available } = req.query;
    
    let where = {};
    
    if (room_type) where.room_type = room_type;
    if (building) where.building = building;
    if (is_available !== undefined) where.is_available = is_available === 'true';
    
    const rooms = await Room.findAll({
      where,
      order: [['room_number', 'ASC']]
    });
    
    res.json({
      success: true,
      count: rooms.length,
      data: rooms
    });
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching rooms',
      error: error.message
    });
  }
});

// @route   GET /api/rooms/:id
// @desc    Get single room
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    
    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      });
    }
    
    res.json({
      success: true,
      data: room
    });
  } catch (error) {
    console.error('Error fetching room:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching room',
      error: error.message
    });
  }
});

// @route   POST /api/rooms
// @desc    Create new room
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { room_number, room_name, room_type, capacity, building, floor } = req.body;
    
    if (!room_number) {
      return res.status(400).json({
        success: false,
        message: 'Missing required field: room_number'
      });
    }
    
    const room = await Room.create({
      room_number,
      room_name,
      room_type: room_type || 'Classroom',
      capacity: capacity || 60,
      building,
      floor
    });
    
    res.status(201).json({
      success: true,
      message: 'Room created successfully',
      data: room
    });
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating room',
      error: error.message
    });
  }
});

// @route   PUT /api/rooms/:id
// @desc    Update room
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    
    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      });
    }
    
    const { room_number, room_name, room_type, capacity, building, floor, is_available } = req.body;
    
    await room.update({
      room_number: room_number || room.room_number,
      room_name: room_name !== undefined ? room_name : room.room_name,
      room_type: room_type || room.room_type,
      capacity: capacity !== undefined ? capacity : room.capacity,
      building: building !== undefined ? building : room.building,
      floor: floor !== undefined ? floor : room.floor,
      is_available: is_available !== undefined ? is_available : room.is_available
    });
    
    res.json({
      success: true,
      message: 'Room updated successfully',
      data: room
    });
  } catch (error) {
    console.error('Error updating room:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating room',
      error: error.message
    });
  }
});

// @route   DELETE /api/rooms/:id
// @desc    Delete room
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const room = await Room.findByPk(req.params.id);
    
    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      });
    }
    
    await room.destroy();
    
    res.json({
      success: true,
      message: 'Room deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting room:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting room',
      error: error.message
    });
  }
});

module.exports = router;
