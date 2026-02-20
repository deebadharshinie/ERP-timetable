const express = require('express');
const router = express.Router();
const { eduvertexSequelize, timetableSequelize } = require('../config/db');
const { QueryTypes } = require('sequelize');

// GET /api/sync/faculties - Fetch faculty from eduvertex and sync to timetable
router.get('/faculties', async (req, res) => {
  try {
    // Fetch all faculty from eduvertex database
    const eduvertexFaculties = await eduvertexSequelize.query(
      `SELECT 
        faculty_id as id,
        faculty_college_code as employeeId,
        Name as name,
        email,
        phone_number as phone,
        department_id,
        designation,
        educational_qualification as qualification,
        gender,
        date_of_birth as dob,
        date_of_joining as doj,
        profile_image_url as imageUrl,
        status
      FROM faculty_profiles 
      WHERE status = 'active'
      ORDER BY Name`,
      { type: QueryTypes.SELECT }
    );

    if (!eduvertexFaculties || eduvertexFaculties.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No active faculty found in EduVertex'
      });
    }

    // Get existing departments from timetable database
    const existingDepts = await timetableSequelize.query(
      `SELECT id, department_code FROM departments`,
      { type: QueryTypes.SELECT }
    );

    // Create a map of department codes to IDs
    const deptMap = {};
    existingDepts.forEach(dept => {
      deptMap[dept.department_code.toUpperCase()] = dept.id;
    });

    // Fetch departments from eduvertex
    const eduvertexDepts = await eduvertexSequelize.query(
      `SELECT id, short_name, full_name FROM departments`,
      { type: QueryTypes.SELECT }
    );

    // Sync missing departments
    for (const dept of eduvertexDepts) {
      const deptCode = dept.short_name.toUpperCase();
      if (!deptMap[deptCode]) {
        await timetableSequelize.query(
          `INSERT INTO departments (department_code, department_name, is_active, created_at, updated_at) 
           VALUES (?, ?, 1, NOW(), NOW())`,
          { 
            replacements: [dept.short_name, dept.full_name],
            type: QueryTypes.INSERT
          }
        );
        console.log(`Synced department: ${dept.short_name}`);
      }
    }

    // Refresh department map after sync
    const updatedDepts = await timetableSequelize.query(
      `SELECT id, department_code FROM departments`,
      { type: QueryTypes.SELECT }
    );
    updatedDepts.forEach(dept => {
      deptMap[dept.department_code.toUpperCase()] = dept.id;
    });

    // Get existing faculties in timetable
    const existingFaculties = await timetableSequelize.query(
      `SELECT employee_id FROM faculties`,
      { type: QueryTypes.SELECT }
    );
    const existingEmpIds = new Set(existingFaculties.map(f => f.employee_id));

    // Sync faculties
    let syncedCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    for (const faculty of eduvertexFaculties) {
      // Map eduvertex department_id to timetable department_id
      const eduvertexDept = eduvertexDepts.find(d => d.id === faculty.department_id);
      const timetableDeptId = eduvertexDept ? deptMap[eduvertexDept.short_name.toUpperCase()] : null;

      if (!timetableDeptId) {
        console.log(`Skipping faculty ${faculty.name} - no matching department`);
        skippedCount++;
        continue;
      }

      if (existingEmpIds.has(faculty.employeeId)) {
        // Update existing faculty
        await timetableSequelize.query(
          `UPDATE faculties SET 
            name = ?,
            department_id = ?,
            designation = ?,
            email = ?,
            phone = ?,
            updated_at = NOW()
           WHERE employee_id = ?`,
          {
            replacements: [
              faculty.name,
              timetableDeptId,
              faculty.designation || 'Assistant Professor',
              faculty.email,
              faculty.phone,
              faculty.employeeId
            ],
            type: QueryTypes.UPDATE
          }
        );
        updatedCount++;
      } else {
        // Insert new faculty
        await timetableSequelize.query(
          `INSERT INTO faculties 
            (name, employee_id, department_id, designation, email, phone, is_active, created_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?, 1, NOW(), NOW())`,
          {
            replacements: [
              faculty.name,
              faculty.employeeId,
              timetableDeptId,
              faculty.designation || 'Assistant Professor',
              faculty.email,
              faculty.phone
            ],
            type: QueryTypes.INSERT
          }
        );
        syncedCount++;
      }
    }

    res.json({
      success: true,
      message: 'Faculty sync completed successfully',
      data: {
        totalInEduvertex: eduvertexFaculties.length,
        newFacultiesAdded: syncedCount,
        existingFacultiesUpdated: updatedCount,
        skipped: skippedCount,
        departmentsSynced: eduvertexDepts.length
      }
    });

  } catch (error) {
    console.error('Error syncing faculties:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to sync faculties',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/sync/faculties/eduvertex - Just fetch from eduvertex without syncing
router.get('/faculties/eduvertex', async (req, res) => {
  try {
    const faculties = await eduvertexSequelize.query(
      `SELECT 
        faculty_id as id,
        faculty_college_code as employeeId,
        Name as name,
        email,
        phone_number as phone,
        department_id,
        designation,
        educational_qualification as qualification,
        gender,
        date_of_birth as dob,
        date_of_joining as doj,
        profile_image_url as imageUrl,
        status
      FROM faculty_profiles 
      WHERE status = 'active'
      ORDER BY Name`,
      { type: QueryTypes.SELECT }
    );

    res.json({
      success: true,
      count: faculties.length,
      data: faculties
    });

  } catch (error) {
    console.error('Error fetching from EduVertex:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch faculty from EduVertex',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/sync/departments - Sync departments from eduvertex
router.get('/departments', async (req, res) => {
  try {
    // Fetch departments from eduvertex
    const eduvertexDepts = await eduvertexSequelize.query(
      `SELECT id, short_name, full_name FROM departments ORDER BY short_name`,
      { type: QueryTypes.SELECT }
    );

    // Get existing departments in timetable
    const timetableDepts = await timetableSequelize.query(
      `SELECT id, department_code FROM departments`,
      { type: QueryTypes.SELECT }
    );

    const existingCodes = new Set(timetableDepts.map(d => d.department_code.toUpperCase()));

    let syncedCount = 0;
    for (const dept of eduvertexDepts) {
      if (!existingCodes.has(dept.short_name.toUpperCase())) {
        await timetableSequelize.query(
          `INSERT INTO departments (department_code, department_name, is_active, created_at, updated_at) 
           VALUES (?, ?, 1, NOW(), NOW())`,
          { 
            replacements: [dept.short_name, dept.full_name],
            type: QueryTypes.INSERT
          }
        );
        syncedCount++;
      }
    }

    // Get all departments from timetable
    const allDepts = await timetableSequelize.query(
      `SELECT * FROM departments ORDER BY department_name`,
      { type: QueryTypes.SELECT }
    );

    res.json({
      success: true,
      message: 'Department sync completed',
      data: {
        fromEduvertex: eduvertexDepts.length,
        newDepartmentsAdded: syncedCount,
        totalInTimetable: allDepts.length,
        departments: allDepts
      }
    });

  } catch (error) {
    console.error('Error syncing departments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to sync departments',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
