// Mock data for College ERP Timetable Management System

export const mockDepartments = [
  { id: 'cs', name: 'Computer Science', code: 'CS' },
  { id: 'it', name: 'Information Technology', code: 'IT' },
  { id: 'ec', name: 'Electronics & Communication', code: 'EC' },
  { id: 'me', name: 'Mechanical Engineering', code: 'ME' },
  { id: 'ce', name: 'Civil Engineering', code: 'CE' },
  { id: 'ee', name: 'Electrical Engineering', code: 'EE' },
];

export const mockStaff = [
  { id: 1, name: 'Dr. John Smith', department: 'Computer Science', designation: 'Professor' },
  { id: 2, name: 'Dr. Sarah Johnson', department: 'Computer Science', designation: 'Associate Professor' },
  { id: 3, name: 'Prof. Michael Brown', department: 'Information Technology', designation: 'Professor' },
  { id: 4, name: 'Dr. Emily Davis', department: 'Electronics & Communication', designation: 'Associate Professor' },
  { id: 5, name: 'Prof. Robert Wilson', department: 'Mechanical Engineering', designation: 'Professor' },
  { id: 6, name: 'Dr. Lisa Anderson', department: 'Civil Engineering', designation: 'Assistant Professor' },
  { id: 7, name: 'Prof. David Martinez', department: 'Electrical Engineering', designation: 'Professor' },
];

export const mockRooms = [
  { id: 1, name: 'Room 101', type: 'Classroom', capacity: 60 },
  { id: 2, name: 'Room 102', type: 'Classroom', capacity: 60 },
  { id: 3, name: 'Lab 1', type: 'Lab', capacity: 30 },
  { id: 4, name: 'Lab 2', type: 'Lab', capacity: 30 },
  { id: 5, name: 'Lab 3', type: 'Lab', capacity: 30 },
  { id: 6, name: 'Seminar Hall', type: 'Hall', capacity: 150 },
];

export const mockSubjects = [
  { code: 'CS301', name: 'Data Structures', type: 'Theory', credits: 4 },
  { code: 'CS302', name: 'Object Oriented Programming', type: 'Theory', credits: 4 },
  { code: 'CS303', name: 'Database Management Systems', type: 'Theory', credits: 4 },
  { code: 'CS304', name: 'Operating Systems', type: 'Theory', credits: 3 },
  { code: 'CS305', name: 'Computer Networks', type: 'Theory', credits: 3 },
  { code: 'CS351', name: 'Data Structures Lab', type: 'Lab', credits: 2 },
  { code: 'CS352', name: 'OOP Lab', type: 'Lab', credits: 2 },
  { code: 'CS353', name: 'DBMS Lab', type: 'Lab', credits: 2 },
];

export const mockTimetableData = [
  {
    id: 1,
    academicYear: '2024-2025',
    department: 'Computer Science',
    year: 'Second Year',
    semester: 'III',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CS301', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CS302', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 'Break', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '11:10', endTime: '11:30' },
      { id: 4, day: 'Monday', periodNumber: 3, subjectCode: 'CS303', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:25' },
      { id: 5, day: 'Monday', periodNumber: 'Lunch', subjectCode: '', subjectName: 'Lunch Break', subjectType: 'Lunch', staffName: '', roomNumber: '', startTime: '12:25', endTime: '01:10' },
      { id: 6, day: 'Monday', periodNumber: 4, subjectCode: 'CS351', subjectName: 'Data Structures Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1', startTime: '01:10', endTime: '02:00' },
      { id: 7, day: 'Monday', periodNumber: 5, subjectCode: 'CS304', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '02:00', endTime: '02:20' },
      { id: 8, day: 'Monday', periodNumber: 'Break2', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '02:20', endTime: '03:10' },
      { id: 9, day: 'Monday', periodNumber: 6, subjectCode: 'CS305', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '03:10', endTime: '04:00' },
      { id: 10, day: 'Monday', periodNumber: 7, subjectCode: '', subjectName: 'Free Period', subjectType: 'Free Period', staffName: '', roomNumber: '', startTime: '04:00', endTime: '04:45' },
      { id: 11, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS302', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 12, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS301', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 13, day: 'Tuesday', periodNumber: 'Break', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '11:10', endTime: '11:30' },
      { id: 14, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS352', subjectName: 'OOP Lab', subjectType: 'Lab', staffName: 'Dr. Sarah Johnson', roomNumber: 'Lab 2', startTime: '11:30', endTime: '12:25' },
      { id: 15, day: 'Tuesday', periodNumber: 'Lunch', subjectCode: '', subjectName: 'Lunch Break', subjectType: 'Lunch', staffName: '', roomNumber: '', startTime: '12:25', endTime: '01:10' },
      { id: 16, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS305', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '01:10', endTime: '02:00' },
      { id: 17, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS304', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '02:00', endTime: '02:20' },
      { id: 18, day: 'Tuesday', periodNumber: 'Break2', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '02:20', endTime: '03:10' },
      { id: 19, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS303', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '03:10', endTime: '04:00' },
      { id: 20, day: 'Tuesday', periodNumber: 7, subjectCode: 'CS353', subjectName: 'DBMS Lab', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 3', startTime: '04:00', endTime: '04:45' },
    ],
  },
  {
    id: 2,
    academicYear: '2024-2025',
    department: 'Computer Science',
    year: 'Third Year',
    semester: 'V',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CS501', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CS502', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 'Break', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '11:10', endTime: '11:30' },
      { id: 4, day: 'Monday', periodNumber: 3, subjectCode: 'CS503', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 202', startTime: '11:30', endTime: '12:25' },
      { id: 5, day: 'Monday', periodNumber: 'Lunch', subjectCode: '', subjectName: 'Lunch Break', subjectType: 'Lunch', staffName: '', roomNumber: '', startTime: '12:25', endTime: '01:10' },
      { id: 6, day: 'Monday', periodNumber: 4, subjectCode: 'CS551', subjectName: 'ML Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1', startTime: '01:10', endTime: '02:00' },
      { id: 7, day: 'Monday', periodNumber: 5, subjectCode: 'CS504', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 201', startTime: '02:00', endTime: '02:20' },
      { id: 8, day: 'Monday', periodNumber: 'Break2', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '02:20', endTime: '03:10' },
      { id: 9, day: 'Monday', periodNumber: 6, subjectCode: 'CS505', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 201', startTime: '03:10', endTime: '04:00' },
      { id: 10, day: 'Monday', periodNumber: 7, subjectCode: '', subjectName: 'Free Period', subjectType: 'Free Period', staffName: '', roomNumber: '', startTime: '04:00', endTime: '04:45' },
      { id: 11, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS502', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 12, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS501', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 13, day: 'Tuesday', periodNumber: 'Break', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '11:10', endTime: '11:30' },
      { id: 14, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS552', subjectName: 'Web Lab', subjectType: 'Lab', staffName: 'Dr. Sarah Johnson', roomNumber: 'Lab 2', startTime: '11:30', endTime: '12:25' },
      { id: 15, day: 'Tuesday', periodNumber: 'Lunch', subjectCode: '', subjectName: 'Lunch Break', subjectType: 'Lunch', staffName: '', roomNumber: '', startTime: '12:25', endTime: '01:10' },
      { id: 16, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS505', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 201', startTime: '01:10', endTime: '02:00' },
      { id: 17, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS504', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 201', startTime: '02:00', endTime: '02:20' },
      { id: 18, day: 'Tuesday', periodNumber: 'Break2', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '02:20', endTime: '03:10' },
      { id: 19, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS503', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 202', startTime: '03:10', endTime: '04:00' },
      { id: 20, day: 'Tuesday', periodNumber: 7, subjectCode: 'CS553', subjectName: 'Project Lab', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 3', startTime: '04:00', endTime: '04:45' },
    ],
  },
  {
    id: 3,
    academicYear: '2024-2025',
    department: 'Computer Science',
    year: 'Final Year',
    semester: 'VII',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'CS701', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'CS702', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 'Break', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '11:10', endTime: '11:30' },
      { id: 4, day: 'Monday', periodNumber: 3, subjectCode: 'CS703', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 302', startTime: '11:30', endTime: '12:25' },
      { id: 5, day: 'Monday', periodNumber: 'Lunch', subjectCode: '', subjectName: 'Lunch Break', subjectType: 'Lunch', staffName: '', roomNumber: '', startTime: '12:25', endTime: '01:10' },
      { id: 6, day: 'Monday', periodNumber: 4, subjectCode: 'CS751', subjectName: 'Cloud Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1', startTime: '01:10', endTime: '02:00' },
      { id: 7, day: 'Monday', periodNumber: 5, subjectCode: 'CS704', subjectName: 'IoT', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 301', startTime: '02:00', endTime: '02:20' },
      { id: 8, day: 'Monday', periodNumber: 'Break2', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '02:20', endTime: '03:10' },
      { id: 9, day: 'Monday', periodNumber: 6, subjectCode: 'CS705', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 301', startTime: '03:10', endTime: '04:00' },
      { id: 10, day: 'Monday', periodNumber: 7, subjectCode: '', subjectName: 'Project Work', subjectType: 'Free Period', staffName: '', roomNumber: '', startTime: '04:00', endTime: '04:45' },
      { id: 11, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS702', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 12, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS701', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 13, day: 'Tuesday', periodNumber: 'Break', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '11:10', endTime: '11:30' },
      { id: 14, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS752', subjectName: 'DevOps Lab', subjectType: 'Lab', staffName: 'Dr. Sarah Johnson', roomNumber: 'Lab 2', startTime: '11:30', endTime: '12:25' },
      { id: 15, day: 'Tuesday', periodNumber: 'Lunch', subjectCode: '', subjectName: 'Lunch Break', subjectType: 'Lunch', staffName: '', roomNumber: '', startTime: '12:25', endTime: '01:10' },
      { id: 16, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS705', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 301', startTime: '01:10', endTime: '02:00' },
      { id: 17, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS704', subjectName: 'IoT', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 301', startTime: '02:00', endTime: '02:20' },
      { id: 18, day: 'Tuesday', periodNumber: 'Break2', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '02:20', endTime: '03:10' },
      { id: 19, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS703', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 302', startTime: '03:10', endTime: '04:00' },
      { id: 20, day: 'Tuesday', periodNumber: 7, subjectCode: 'CS753', subjectName: 'Major Project', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 3', startTime: '04:00', endTime: '04:45' },
    ],
  },
];

export const academicYears = ['2024-2025', '2025-2026', '2026-2027'];
export const years = ['I Year', 'II Year', 'III Year', 'IV Year'];
export const semesters = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
export const sections = ['A', 'B', 'C'];
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const subjectTypes = ['Theory', 'Lab', 'Free Period', 'Break', 'Lunch'];
