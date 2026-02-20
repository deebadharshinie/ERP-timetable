// Mock data for College ERP Timetable Management System

export const mockDepartments = [
  { id: 'cs', name: 'Computer Science', code: 'CS' },
  { id: 'it', name: 'Information Technology', code: 'IT' },
  { id: 'ec', name: 'Electronics & Communication', code: 'EC' },
  { id: 'me', name: 'Mechanical Engineering', code: 'ME' },
  { id: 'ce', name: 'Civil Engineering', code: 'CE' },
  { id: 'ee', name: 'Electrical Engineering', code: 'EE' },
];

// Comprehensive faculty list
export const mockStaff = [
  // Computer Science Department
  { id: 1, name: 'Dr. John Smith', department: 'Computer Science', designation: 'Professor', specialization: 'Data Structures, Algorithms' },
  { id: 2, name: 'Dr. Sarah Johnson', department: 'Computer Science', designation: 'Associate Professor', specialization: 'Database Systems, OOP' },
  { id: 3, name: 'Prof. Michael Brown', department: 'Computer Science', designation: 'Professor', specialization: 'Machine Learning, AI' },
  { id: 4, name: 'Dr. Emily Davis', department: 'Computer Science', designation: 'Assistant Professor', specialization: 'Operating Systems, Networks' },
  { id: 5, name: 'Prof. Robert Wilson', department: 'Information Technology', designation: 'Professor', specialization: 'Web Technologies, Cloud' },
  { id: 6, name: 'Dr. Lisa Anderson', department: 'Information Technology', designation: 'Associate Professor', specialization: 'Cyber Security, Cryptography' },
  { id: 7, name: 'Prof. David Martinez', department: 'Electronics & Communication', designation: 'Professor', specialization: 'VLSI, Embedded Systems' },
  { id: 8, name: 'Dr. Jennifer Taylor', department: 'Electronics & Communication', designation: 'Assistant Professor', specialization: 'Signal Processing, IoT' },
  { id: 9, name: 'Prof. James Thomas', department: 'Mechanical Engineering', designation: 'Professor', specialization: 'Thermodynamics, CAD/CAM' },
  { id: 10, name: 'Dr. Patricia Jackson', department: 'Mechanical Engineering', designation: 'Associate Professor', specialization: 'Fluid Mechanics, Heat Transfer' },
  { id: 11, name: 'Prof. Christopher White', department: 'Civil Engineering', designation: 'Professor', specialization: 'Structural Analysis, Design' },
  { id: 12, name: 'Dr. Maria Harris', department: 'Civil Engineering', designation: 'Assistant Professor', specialization: 'Geotechnical, Transportation' },
  { id: 13, name: 'Prof. Daniel Martin', department: 'Electrical Engineering', designation: 'Professor', specialization: 'Power Systems, Control Systems' },
  { id: 14, name: 'Dr. Susan Thompson', department: 'Electrical Engineering', designation: 'Associate Professor', specialization: 'Power Electronics, Motors' },
];

// Comprehensive timetable data for all years and departments
export const mockTimetableData = [
  // ===== COMPUTER SCIENCE DEPARTMENT =====

  // First Year - CSE - Section A
  {
    id: 1,
    academicYear: '2024-2025',
    department: 'Computer Science',
    year: 'First Year',
    semester: 'I',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:20' },
      { id: 4, day: 'Monday', periodNumber: 4, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      { id: 5, day: 'Monday', periodNumber: 5, subjectCode: 'CS105', subjectName: 'English', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 101', startTime: '02:10', endTime: '03:00' },
      { id: 6, day: 'Monday', periodNumber: 6, subjectCode: 'CS106', subjectName: 'Engineering Drawing', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '03:00', endTime: '03:50' },
      { id: 7, day: 'Monday', periodNumber: 7, subjectCode: 'CS151', subjectName: 'Programming Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1 (CS)', startTime: '04:10', endTime: '05:00' },
      
      { id: 8, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 9, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 10, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:20' },
      { id: 11, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      { id: 12, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS106', subjectName: 'Engineering Drawing', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '02:10', endTime: '03:00' },
      { id: 13, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS105', subjectName: 'English', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 101', startTime: '03:00', endTime: '03:50' },
      
      { id: 14, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 15, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 16, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:20' },
      { id: 17, day: 'Wednesday', periodNumber: 4, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      
      { id: 18, day: 'Thursday', periodNumber: 1, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 19, day: 'Thursday', periodNumber: 2, subjectCode: 'CS105', subjectName: 'English', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 20, day: 'Thursday', periodNumber: 3, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:20' },
      { id: 21, day: 'Thursday', periodNumber: 4, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      
      { id: 22, day: 'Friday', periodNumber: 1, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 23, day: 'Friday', periodNumber: 2, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 24, day: 'Friday', periodNumber: 3, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:20' },
      { id: 25, day: 'Friday', periodNumber: 4, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
    ],
  },

  // Second Year - CSE - Section A
  {
    id: 2,
    academicYear: '2024-2025',
    department: 'Computer Science',
    year: 'Second Year',
    semester: 'III',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:25' },
      { id: 4, day: 'Monday', periodNumber: 4, subjectCode: 'CS251', subjectName: 'Data Structures Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1 (CS)', startTime: '01:10', endTime: '02:00' },
      { id: 5, day: 'Monday', periodNumber: 5, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '02:00', endTime: '02:50' },
      { id: 6, day: 'Monday', periodNumber: 6, subjectCode: 'CS205', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '03:10', endTime: '04:00' },
      
      { id: 7, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 9, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS205', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:25' },
      { id: 10, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS253', subjectName: 'DBMS Lab', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 1 (CS)', startTime: '01:10', endTime: '02:00' },
      { id: 11, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '02:00', endTime: '02:50' },
      
      { id: 12, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 13, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '10:20', endTime: '11:10' },
      { id: 14, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:25' },
      { id: 15, day: 'Wednesday', periodNumber: 4, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '01:10', endTime: '02:00' },
      
      { id: 16, day: 'Thursday', periodNumber: 1, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 17, day: 'Thursday', periodNumber: 2, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 18, day: 'Thursday', periodNumber: 3, subjectCode: 'CS205', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:25' },
      
      { id: 19, day: 'Friday', periodNumber: 1, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 20, day: 'Friday', periodNumber: 2, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 21, day: 'Friday', periodNumber: 3, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:25' },
    ],
  },

  // Third Year - CSE - Section A
  {
    id: 3,
    academicYear: '2024-2025',
    department: 'Computer Science',
    year: 'Third Year',
    semester: 'V',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CS302', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CS303', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 202', startTime: '11:30', endTime: '12:25' },
      { id: 4, day: 'Monday', periodNumber: 4, subjectCode: 'CS351', subjectName: 'ML Lab', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 1 (CS)', startTime: '01:10', endTime: '02:00' },
      { id: 5, day: 'Monday', periodNumber: 5, subjectCode: 'CS304', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 201', startTime: '02:00', endTime: '02:50' },
      { id: 6, day: 'Monday', periodNumber: 6, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 201', startTime: '03:10', endTime: '04:00' },
      
      { id: 7, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS302', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 9, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS352', subjectName: 'Web Lab', subjectType: 'Lab', staffName: 'Prof. Robert Wilson', roomNumber: 'Lab 2 (CS)', startTime: '11:30', endTime: '12:25' },
      { id: 10, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 201', startTime: '01:10', endTime: '02:00' },
      
      { id: 11, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 12, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS303', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 202', startTime: '10:20', endTime: '11:10' },
      { id: 13, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 201', startTime: '11:30', endTime: '12:25' },
      
      { id: 14, day: 'Thursday', periodNumber: 1, subjectCode: 'CS302', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 15, day: 'Thursday', periodNumber: 2, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 16, day: 'Thursday', periodNumber: 3, subjectCode: 'CS303', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 202', startTime: '11:30', endTime: '12:25' },
      
      { id: 17, day: 'Friday', periodNumber: 1, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 18, day: 'Friday', periodNumber: 2, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 19, day: 'Friday', periodNumber: 3, subjectCode: 'CS302', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 202', startTime: '11:30', endTime: '12:25' },
    ],
  },

  // Final Year - CSE - Section A
  {
    id: 4,
    academicYear: '2024-2025',
    department: 'Computer Science',
    year: 'Final Year',
    semester: 'VII',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CS402', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CS403', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 302', startTime: '11:30', endTime: '12:25' },
      { id: 4, day: 'Monday', periodNumber: 4, subjectCode: 'CS451', subjectName: 'Cloud Lab', subjectType: 'Lab', staffName: 'Prof. Robert Wilson', roomNumber: 'Lab 1 (CS)', startTime: '01:10', endTime: '02:00' },
      { id: 5, day: 'Monday', periodNumber: 5, subjectCode: 'CS404', subjectName: 'IoT', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 301', startTime: '02:00', endTime: '02:50' },
      { id: 6, day: 'Monday', periodNumber: 6, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '03:10', endTime: '04:00' },
      
      { id: 7, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS402', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 9, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS452', subjectName: 'DevOps Lab', subjectType: 'Lab', staffName: 'Dr. Lisa Anderson', roomNumber: 'Lab 2 (CS)', startTime: '11:30', endTime: '12:25' },
      { id: 10, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '01:10', endTime: '02:00' },
      
      { id: 11, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 12, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS403', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 302', startTime: '10:20', endTime: '11:10' },
      { id: 13, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '11:30', endTime: '12:25' },
      
      { id: 14, day: 'Thursday', periodNumber: 1, subjectCode: 'CS402', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 15, day: 'Thursday', periodNumber: 2, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 16, day: 'Thursday', periodNumber: 3, subjectCode: 'CS403', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 302', startTime: '11:30', endTime: '12:25' },
      
      { id: 17, day: 'Friday', periodNumber: 1, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 18, day: 'Friday', periodNumber: 2, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 19, day: 'Friday', periodNumber: 3, subjectCode: 'CS402', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 302', startTime: '11:30', endTime: '12:25' },
    ],
  },

  // ===== MECHANICAL ENGINEERING DEPARTMENT =====

  // Second Year - ME - Section A
  {
    id: 10,
    academicYear: '2024-2025',
    department: 'Mechanical Engineering',
    year: 'Second Year',
    semester: 'III',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'ME201', subjectName: 'Engineering Mechanics', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'ME202', subjectName: 'Thermodynamics', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'ME251', subjectName: 'Workshop Practice', subjectType: 'Lab', staffName: 'Dr. Patricia Jackson', roomNumber: 'Workshop 1', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'ME201', subjectName: 'Engineering Mechanics', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'ME202', subjectName: 'Thermodynamics', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'ME252', subjectName: 'CAD Lab', subjectType: 'Lab', staffName: 'Dr. Patricia Jackson', roomNumber: 'CAD Lab', startTime: '11:30', endTime: '12:25' },
      
      { id: 7, day: 'Wednesday', periodNumber: 1, subjectCode: 'ME203', subjectName: 'Fluid Mechanics', subjectType: 'Theory', staffName: 'Dr. Patricia Jackson', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Wednesday', periodNumber: 2, subjectCode: 'ME204', subjectName: 'Heat Transfer', subjectType: 'Theory', staffName: 'Dr. Patricia Jackson', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
      { id: 9, day: 'Wednesday', periodNumber: 3, subjectCode: 'ME201', subjectName: 'Engineering Mechanics', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '11:30', endTime: '12:25' },
      
      { id: 10, day: 'Thursday', periodNumber: 1, subjectCode: 'ME203', subjectName: 'Fluid Mechanics', subjectType: 'Theory', staffName: 'Dr. Patricia Jackson', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 11, day: 'Thursday', periodNumber: 2, subjectCode: 'ME204', subjectName: 'Heat Transfer', subjectType: 'Theory', staffName: 'Dr. Patricia Jackson', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
      
      { id: 12, day: 'Friday', periodNumber: 1, subjectCode: 'ME202', subjectName: 'Thermodynamics', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 13, day: 'Friday', periodNumber: 2, subjectCode: 'ME203', subjectName: 'Fluid Mechanics', subjectType: 'Theory', staffName: 'Dr. Patricia Jackson', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
    ],
  },

  // Third Year - ME - Section A
  {
    id: 11,
    academicYear: '2024-2025',
    department: 'Mechanical Engineering',
    year: 'Third Year',
    semester: 'V',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'ME301', subjectName: 'Machine Design', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'ME302', subjectName: 'CAD/CAM', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'ME351', subjectName: 'Machine Design Lab', subjectType: 'Lab', staffName: 'Prof. James Thomas', roomNumber: 'CAD Lab', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'ME301', subjectName: 'Machine Design', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'ME303', subjectName: 'Industrial Engineering', subjectType: 'Theory', staffName: 'Dr. Patricia Jackson', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'ME352', subjectName: 'CAD/CAM Lab', subjectType: 'Lab', staffName: 'Prof. James Thomas', roomNumber: 'CAD Lab', startTime: '11:30', endTime: '12:25' },
      
      { id: 7, day: 'Wednesday', periodNumber: 1, subjectCode: 'ME302', subjectName: 'CAD/CAM', subjectType: 'Theory', staffName: 'Prof. James Thomas', roomNumber: 'Room 105', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Wednesday', periodNumber: 2, subjectCode: 'ME303', subjectName: 'Industrial Engineering', subjectType: 'Theory', staffName: 'Dr. Patricia Jackson', roomNumber: 'Room 105', startTime: '10:20', endTime: '11:10' },
    ],
  },

  // ===== CIVIL ENGINEERING DEPARTMENT =====

  // Second Year - CE - Section A
  {
    id: 12,
    academicYear: '2024-2025',
    department: 'Civil Engineering',
    year: 'Second Year',
    semester: 'III',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CE201', subjectName: 'Structural Analysis', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CE202', subjectName: 'Geotechnical Engineering', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CE251', subjectName: 'Surveying Lab', subjectType: 'Lab', staffName: 'Dr. Maria Harris', roomNumber: 'Survey Lab', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'CE201', subjectName: 'Structural Analysis', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'CE203', subjectName: 'Transportation Engineering', subjectType: 'Theory', staffName: 'Dr. Maria Harris', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'CE252', subjectName: 'Geotech Lab', subjectType: 'Lab', staffName: 'Prof. Christopher White', roomNumber: 'Geotech Lab', startTime: '11:30', endTime: '12:25' },
      
      { id: 7, day: 'Wednesday', periodNumber: 1, subjectCode: 'CE202', subjectName: 'Geotechnical Engineering', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Wednesday', periodNumber: 2, subjectCode: 'CE203', subjectName: 'Transportation Engineering', subjectType: 'Theory', staffName: 'Dr. Maria Harris', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
      { id: 9, day: 'Wednesday', periodNumber: 3, subjectCode: 'CE201', subjectName: 'Structural Analysis', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '11:30', endTime: '12:25' },
      
      { id: 10, day: 'Thursday', periodNumber: 1, subjectCode: 'CE202', subjectName: 'Geotechnical Engineering', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 11, day: 'Thursday', periodNumber: 2, subjectCode: 'CE203', subjectName: 'Transportation Engineering', subjectType: 'Theory', staffName: 'Dr. Maria Harris', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
      
      { id: 12, day: 'Friday', periodNumber: 1, subjectCode: 'CE201', subjectName: 'Structural Analysis', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 13, day: 'Friday', periodNumber: 2, subjectCode: 'CE202', subjectName: 'Geotechnical Engineering', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
    ],
  },

  // Third Year - CE - Section A
  {
    id: 13,
    academicYear: '2024-2025',
    department: 'Civil Engineering',
    year: 'Third Year',
    semester: 'V',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CE301', subjectName: 'RCC Design', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CE302', subjectName: 'Environmental Engineering', subjectType: 'Theory', staffName: 'Dr. Maria Harris', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CE351', subjectName: 'RCC Design Lab', subjectType: 'Lab', staffName: 'Prof. Christopher White', roomNumber: 'CAD Lab CE', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'CE301', subjectName: 'RCC Design', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'CE302', subjectName: 'Environmental Engineering', subjectType: 'Theory', staffName: 'Dr. Maria Harris', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'CE352', subjectName: 'Env Lab', subjectType: 'Lab', staffName: 'Dr. Maria Harris', roomNumber: 'Env Lab', startTime: '11:30', endTime: '12:25' },
      
      { id: 7, day: 'Wednesday', periodNumber: 1, subjectCode: 'CE301', subjectName: 'RCC Design', subjectType: 'Theory', staffName: 'Prof. Christopher White', roomNumber: 'Room 106', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Wednesday', periodNumber: 2, subjectCode: 'CE302', subjectName: 'Environmental Engineering', subjectType: 'Theory', staffName: 'Dr. Maria Harris', roomNumber: 'Room 106', startTime: '10:20', endTime: '11:10' },
    ],
  },

  // ===== ELECTRICAL ENGINEERING DEPARTMENT =====

  // Second Year - EE - Section A
  {
    id: 14,
    academicYear: '2024-2025',
    department: 'Electrical Engineering',
    year: 'Second Year',
    semester: 'III',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'EE201', subjectName: 'Power Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'EE202', subjectName: 'Control Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'EE251', subjectName: 'Electrical Machines Lab', subjectType: 'Lab', staffName: 'Dr. Susan Thompson', roomNumber: 'EE Lab 1', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'EE201', subjectName: 'Power Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'EE203', subjectName: 'Power Electronics', subjectType: 'Theory', staffName: 'Dr. Susan Thompson', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'EE252', subjectName: 'Control Systems Lab', subjectType: 'Lab', staffName: 'Prof. Daniel Martin', roomNumber: 'EE Lab 2', startTime: '11:30', endTime: '12:25' },
      
      { id: 7, day: 'Wednesday', periodNumber: 1, subjectCode: 'EE202', subjectName: 'Control Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Wednesday', periodNumber: 2, subjectCode: 'EE203', subjectName: 'Power Electronics', subjectType: 'Theory', staffName: 'Dr. Susan Thompson', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
      { id: 9, day: 'Wednesday', periodNumber: 3, subjectCode: 'EE201', subjectName: 'Power Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '11:30', endTime: '12:25' },
      
      { id: 10, day: 'Thursday', periodNumber: 1, subjectCode: 'EE202', subjectName: 'Control Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 11, day: 'Thursday', periodNumber: 2, subjectCode: 'EE203', subjectName: 'Power Electronics', subjectType: 'Theory', staffName: 'Dr. Susan Thompson', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
      
      { id: 12, day: 'Friday', periodNumber: 1, subjectCode: 'EE201', subjectName: 'Power Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 13, day: 'Friday', periodNumber: 2, subjectCode: 'EE202', subjectName: 'Control Systems', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
    ],
  },

  // Third Year - EE - Section A
  {
    id: 15,
    academicYear: '2024-2025',
    department: 'Electrical Engineering',
    year: 'Third Year',
    semester: 'V',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'EE301', subjectName: 'High Voltage Engineering', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'EE302', subjectName: 'Renewable Energy Systems', subjectType: 'Theory', staffName: 'Dr. Susan Thompson', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'EE351', subjectName: 'Power Systems Lab', subjectType: 'Lab', staffName: 'Prof. Daniel Martin', roomNumber: 'EE Lab 1', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'EE301', subjectName: 'High Voltage Engineering', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'EE302', subjectName: 'Renewable Energy Systems', subjectType: 'Theory', staffName: 'Dr. Susan Thompson', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'EE352', subjectName: 'Power Electronics Lab', subjectType: 'Lab', staffName: 'Dr. Susan Thompson', roomNumber: 'EE Lab 2', startTime: '11:30', endTime: '12:25' },
      
      { id: 7, day: 'Wednesday', periodNumber: 1, subjectCode: 'EE301', subjectName: 'High Voltage Engineering', subjectType: 'Theory', staffName: 'Prof. Daniel Martin', roomNumber: 'Room 107', startTime: '09:30', endTime: '10:20' },
      { id: 8, day: 'Wednesday', periodNumber: 2, subjectCode: 'EE302', subjectName: 'Renewable Energy Systems', subjectType: 'Theory', staffName: 'Dr. Susan Thompson', roomNumber: 'Room 107', startTime: '10:20', endTime: '11:10' },
    ],
  },

  // ===== ELECTRONICS & COMMUNICATION DEPARTMENT =====

  // Second Year - EC - Section A
  {
    id: 16,
    academicYear: '2024-2025',
    department: 'Electronics & Communication',
    year: 'Second Year',
    semester: 'III',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'EC201', subjectName: 'Digital Electronics', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 104', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'EC201', subjectName: 'Digital Electronics', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 104', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'EC251', subjectName: 'Digital Lab', subjectType: 'Lab', staffName: 'Prof. David Martinez', roomNumber: 'Lab 4 (EC)', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'EC201', subjectName: 'Digital Electronics', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 104', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'EC201', subjectName: 'Digital Electronics', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 104', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'EC251', subjectName: 'Digital Lab', subjectType: 'Lab', staffName: 'Prof. David Martinez', roomNumber: 'Lab 4 (EC)', startTime: '11:30', endTime: '12:25' },
    ],
  },

  // Third Year - EC - Section A
  {
    id: 17,
    academicYear: '2024-2025',
    department: 'Electronics & Communication',
    year: 'Third Year',
    semester: 'V',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'EC301', subjectName: 'Signal Processing', subjectType: 'Theory', staffName: 'Dr. Jennifer Taylor', roomNumber: 'Room 104', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'EC301', subjectName: 'Signal Processing', subjectType: 'Theory', staffName: 'Dr. Jennifer Taylor', roomNumber: 'Room 104', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'EC401', subjectName: 'VLSI Design', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 104', startTime: '11:30', endTime: '12:25' },
      
      { id: 4, day: 'Tuesday', periodNumber: 1, subjectCode: 'EC301', subjectName: 'Signal Processing', subjectType: 'Theory', staffName: 'Dr. Jennifer Taylor', roomNumber: 'Room 104', startTime: '09:30', endTime: '10:20' },
      { id: 5, day: 'Tuesday', periodNumber: 2, subjectCode: 'EC401', subjectName: 'VLSI Design', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 104', startTime: '10:20', endTime: '11:10' },
      { id: 6, day: 'Tuesday', periodNumber: 3, subjectCode: 'EC301', subjectName: 'Signal Processing', subjectType: 'Theory', staffName: 'Dr. Jennifer Taylor', roomNumber: 'Room 104', startTime: '11:30', endTime: '12:25' },
    ],
  },
];

export const academicYears = ['2024-2025', '2025-2026', '2026-2027'];
export const years = ['I Year', 'II Year', 'III Year', 'IV Year'];
export const semesters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
export const sections = ['A', 'B', 'C'];
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const subjectTypes = ['Theory', 'Lab', 'Free Period', 'Break', 'Lunch'];
