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
  
  // Information Technology Department
  { id: 5, name: 'Prof. Robert Wilson', department: 'Information Technology', designation: 'Professor', specialization: 'Web Technologies, Cloud' },
  { id: 6, name: 'Dr. Lisa Anderson', department: 'Information Technology', designation: 'Associate Professor', specialization: 'Cyber Security, Cryptography' },
  
  // Electronics & Communication Department
  { id: 7, name: 'Prof. David Martinez', department: 'Electronics & Communication', designation: 'Professor', specialization: 'VLSI, Embedded Systems' },
  { id: 8, name: 'Dr. Jennifer Taylor', department: 'Electronics & Communication', designation: 'Assistant Professor', specialization: 'Signal Processing, IoT' },
  
  // Mechanical Engineering Department
  { id: 9, name: 'Prof. James Thomas', department: 'Mechanical Engineering', designation: 'Professor', specialization: 'Thermodynamics, CAD/CAM' },
  { id: 10, name: 'Dr. Patricia Jackson', department: 'Mechanical Engineering', designation: 'Associate Professor', specialization: 'Fluid Mechanics, Heat Transfer' },
  
  // Civil Engineering Department
  { id: 11, name: 'Prof. Christopher White', department: 'Civil Engineering', designation: 'Professor', specialization: 'Structural Analysis, Design' },
  { id: 12, name: 'Dr. Maria Harris', department: 'Civil Engineering', designation: 'Assistant Professor', specialization: 'Geotechnical, Transportation' },
  
  // Electrical Engineering Department
  { id: 13, name: 'Prof. Daniel Martin', department: 'Electrical Engineering', designation: 'Professor', specialization: 'Power Systems, Control Systems' },
  { id: 14, name: 'Dr. Susan Thompson', department: 'Electrical Engineering', designation: 'Associate Professor', specialization: 'Power Electronics, Motors' },
];

// Comprehensive subjects for all departments
export const mockSubjects = [
  // Computer Science Subjects
  { code: 'CS101', name: 'Programming Fundamentals', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS102', name: 'Mathematics-I', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS103', name: 'Physics', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS104', name: 'Chemistry', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS105', name: 'English', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS106', name: 'Engineering Drawing', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS151', name: 'Programming Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  
  { code: 'CS201', name: 'Data Structures', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS202', name: 'Object Oriented Programming', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS203', name: 'Database Management Systems', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS204', name: 'Operating Systems', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS205', name: 'Computer Networks', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS251', name: 'Data Structures Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  { code: 'CS252', name: 'OOP Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  { code: 'CS253', name: 'DBMS Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  
  { code: 'CS301', name: 'Machine Learning', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS302', name: 'Web Technologies', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS303', name: 'Compiler Design', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS304', name: 'Cloud Computing', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS305', name: 'Cryptography', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS351', name: 'ML Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  { code: 'CS352', name: 'Web Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  
  { code: 'CS401', name: 'Cloud Architecture', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS402', name: 'DevOps', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS403', name: 'Blockchain', type: 'Theory', credits: 4, department: 'Computer Science' },
  { code: 'CS404', name: 'IoT', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS405', name: 'Cyber Security', type: 'Theory', credits: 3, department: 'Computer Science' },
  { code: 'CS451', name: 'Cloud Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  { code: 'CS452', name: 'DevOps Lab', type: 'Lab', credits: 2, department: 'Computer Science' },
  { code: 'CS453', name: 'Major Project', type: 'Lab', credits: 4, department: 'Computer Science' },
  
  // IT Subjects
  { code: 'IT101', name: 'Programming Fundamentals', type: 'Theory', credits: 4, department: 'Information Technology' },
  { code: 'IT151', name: 'Programming Lab', type: 'Lab', credits: 2, department: 'Information Technology' },
  { code: 'IT201', name: 'Web Development', type: 'Theory', credits: 4, department: 'Information Technology' },
  { code: 'IT251', name: 'Web Lab', type: 'Lab', credits: 2, department: 'Information Technology' },
  { code: 'IT301', name: 'Cloud Computing', type: 'Theory', credits: 4, department: 'Information Technology' },
  { code: 'IT351', name: 'Cloud Lab', type: 'Lab', credits: 2, department: 'Information Technology' },
  { code: 'IT401', name: 'DevOps', type: 'Theory', credits: 4, department: 'Information Technology' },
  
  // EC Subjects
  { code: 'EC101', name: 'Electronic Devices', type: 'Theory', credits: 4, department: 'Electronics & Communication' },
  { code: 'EC151', name: 'Electronic Devices Lab', type: 'Lab', credits: 2, department: 'Electronics & Communication' },
  { code: 'EC201', name: 'Digital Electronics', type: 'Theory', credits: 4, department: 'Electronics & Communication' },
  { code: 'EC251', name: 'Digital Lab', type: 'Lab', credits: 2, department: 'Electronics & Communication' },
  { code: 'EC301', name: 'Signal Processing', type: 'Theory', credits: 4, department: 'Electronics & Communication' },
  { code: 'EC401', name: 'VLSI Design', type: 'Theory', credits: 4, department: 'Electronics & Communication' },
];

// Rooms and Labs
export const mockRooms = [
  { id: 1, name: 'Room 101', type: 'Classroom', capacity: 60, department: 'All' },
  { id: 2, name: 'Room 102', type: 'Classroom', capacity: 60, department: 'All' },
  { id: 3, name: 'Room 103', type: 'Classroom', capacity: 60, department: 'All' },
  { id: 4, name: 'Lab 1 (CS)', type: 'Lab', capacity: 30, department: 'Computer Science' },
  { id: 5, name: 'Lab 2 (CS)', type: 'Lab', capacity: 30, department: 'Computer Science' },
  { id: 6, name: 'Lab 3 (IT)', type: 'Lab', capacity: 30, department: 'Information Technology' },
  { id: 7, name: 'Lab 4 (EC)', type: 'Lab', capacity: 30, department: 'Electronics & Communication' },
  { id: 8, name: 'Seminar Hall', type: 'Hall', capacity: 150, department: 'All' },
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
      { id: 3, day: 'Monday', periodNumber: 'Break1', subjectCode: '', subjectName: 'Break', subjectType: 'Break', staffName: '', roomNumber: '', startTime: '11:10', endTime: '11:30' },
      { id: 4, day: 'Monday', periodNumber: 3, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:20' },
      { id: 5, day: 'Monday', periodNumber: 4, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      { id: 6, day: 'Monday', periodNumber: 'Lunch', subjectCode: '', subjectName: 'Lunch Break', subjectType: 'Lunch', staffName: '', roomNumber: '', startTime: '01:30', endTime: '02:10' },
      { id: 7, day: 'Monday', periodNumber: 5, subjectCode: 'CS105', subjectName: 'English', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 101', startTime: '02:10', endTime: '03:00' },
      { id: 8, day: 'Monday', periodNumber: 6, subjectCode: 'CS106', subjectName: 'Engineering Drawing', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '03:00', endTime: '03:50' },
      { id: 9, day: 'Monday', periodNumber: 7, subjectCode: 'CS151', subjectName: 'Programming Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1 (CS)', startTime: '04:10', endTime: '05:00' },
      
      { id: 10, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 11, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 12, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:20' },
      { id: 13, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      { id: 14, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS106', subjectName: 'Engineering Drawing', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '02:10', endTime: '03:00' },
      { id: 15, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS105', subjectName: 'English', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 101', startTime: '03:00', endTime: '03:50' },
      { id: 16, day: 'Tuesday', periodNumber: 7, subjectCode: 'CS151', subjectName: 'Programming Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1 (CS)', startTime: '04:10', endTime: '05:00' },
      
      { id: 17, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 18, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 19, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:20' },
      { id: 20, day: 'Wednesday', periodNumber: 4, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      { id: 21, day: 'Wednesday', periodNumber: 5, subjectCode: 'CS151', subjectName: 'Programming Lab', subjectType: 'Lab', staffName: 'Dr. John Smith', roomNumber: 'Lab 1 (CS)', startTime: '02:10', endTime: '03:00' },
      
      { id: 22, day: 'Thursday', periodNumber: 1, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 23, day: 'Thursday', periodNumber: 2, subjectCode: 'CS105', subjectName: 'English', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 24, day: 'Thursday', periodNumber: 3, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:20' },
      { id: 25, day: 'Thursday', periodNumber: 4, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
      
      { id: 26, day: 'Friday', periodNumber: 1, subjectCode: 'CS104', subjectName: 'Chemistry', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 27, day: 'Friday', periodNumber: 2, subjectCode: 'CS103', subjectName: 'Physics', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 28, day: 'Friday', periodNumber: 3, subjectCode: 'CS101', subjectName: 'Programming Fundamentals', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:20' },
      { id: 29, day: 'Friday', periodNumber: 4, subjectCode: 'CS102', subjectName: 'Mathematics-I', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 102', startTime: '12:20', endTime: '01:10' },
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
      { id: 7, day: 'Monday', periodNumber: 7, subjectCode: 'CS252', subjectName: 'OOP Lab', subjectType: 'Lab', staffName: 'Dr. Sarah Johnson', roomNumber: 'Lab 2 (CS)', startTime: '04:00', endTime: '04:50' },
      
      { id: 8, day: 'Tuesday', periodNumber: 1, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 9, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 10, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS205', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:25' },
      { id: 11, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS253', subjectName: 'DBMS Lab', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 1 (CS)', startTime: '01:10', endTime: '02:00' },
      { id: 12, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '02:00', endTime: '02:50' },
      { id: 13, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '03:10', endTime: '04:00' },
      
      { id: 14, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 15, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '10:20', endTime: '11:10' },
      { id: 16, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:25' },
      { id: 17, day: 'Wednesday', periodNumber: 4, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '01:10', endTime: '02:00' },
      { id: 18, day: 'Wednesday', periodNumber: 5, subjectCode: 'CS205', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '02:00', endTime: '02:50' },
      
      { id: 19, day: 'Thursday', periodNumber: 1, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 20, day: 'Thursday', periodNumber: 2, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 21, day: 'Thursday', periodNumber: 3, subjectCode: 'CS205', subjectName: 'Computer Networks', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 101', startTime: '11:30', endTime: '12:25' },
      { id: 22, day: 'Thursday', periodNumber: 4, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '01:10', endTime: '02:00' },
      
      { id: 23, day: 'Friday', periodNumber: 1, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 101', startTime: '09:30', endTime: '10:20' },
      { id: 24, day: 'Friday', periodNumber: 2, subjectCode: 'CS201', subjectName: 'Data Structures', subjectType: 'Theory', staffName: 'Dr. John Smith', roomNumber: 'Room 101', startTime: '10:20', endTime: '11:10' },
      { id: 25, day: 'Friday', periodNumber: 3, subjectCode: 'CS202', subjectName: 'Object Oriented Programming', subjectType: 'Theory', staffName: 'Dr. Sarah Johnson', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:25' },
      { id: 26, day: 'Friday', periodNumber: 4, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 101', startTime: '01:10', endTime: '02:00' },
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
      { id: 11, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS304', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 201', startTime: '02:00', endTime: '02:50' },
      { id: 12, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS303', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 202', startTime: '03:10', endTime: '04:00' },
      
      { id: 13, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 14, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS303', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 202', startTime: '10:20', endTime: '11:10' },
      { id: 15, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 201', startTime: '11:30', endTime: '12:25' },
      { id: 16, day: 'Wednesday', periodNumber: 4, subjectCode: 'CS304', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 201', startTime: '01:10', endTime: '02:00' },
      
      { id: 17, day: 'Thursday', periodNumber: 1, subjectCode: 'CS302', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 18, day: 'Thursday', periodNumber: 2, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 19, day: 'Thursday', periodNumber: 3, subjectCode: 'CS303', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 202', startTime: '11:30', endTime: '12:25' },
      
      { id: 20, day: 'Friday', periodNumber: 1, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 201', startTime: '09:30', endTime: '10:20' },
      { id: 21, day: 'Friday', periodNumber: 2, subjectCode: 'CS301', subjectName: 'Machine Learning', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 201', startTime: '10:20', endTime: '11:10' },
      { id: 22, day: 'Friday', periodNumber: 3, subjectCode: 'CS302', subjectName: 'Web Technologies', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 202', startTime: '11:30', endTime: '12:25' },
      { id: 23, day: 'Friday', periodNumber: 4, subjectCode: 'CS303', subjectName: 'Compiler Design', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 201', startTime: '01:10', endTime: '02:00' },
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
      { id: 11, day: 'Tuesday', periodNumber: 5, subjectCode: 'CS404', subjectName: 'IoT', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 301', startTime: '02:00', endTime: '02:50' },
      { id: 12, day: 'Tuesday', periodNumber: 6, subjectCode: 'CS403', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 302', startTime: '03:10', endTime: '04:00' },
      
      { id: 13, day: 'Wednesday', periodNumber: 1, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 14, day: 'Wednesday', periodNumber: 2, subjectCode: 'CS403', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 302', startTime: '10:20', endTime: '11:10' },
      { id: 15, day: 'Wednesday', periodNumber: 3, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '11:30', endTime: '12:25' },
      { id: 16, day: 'Wednesday', periodNumber: 4, subjectCode: 'CS404', subjectName: 'IoT', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 301', startTime: '01:10', endTime: '02:00' },
      
      { id: 17, day: 'Thursday', periodNumber: 1, subjectCode: 'CS402', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 18, day: 'Thursday', periodNumber: 2, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 19, day: 'Thursday', periodNumber: 3, subjectCode: 'CS403', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 302', startTime: '11:30', endTime: '12:25' },
      
      { id: 20, day: 'Friday', periodNumber: 1, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 301', startTime: '09:30', endTime: '10:20' },
      { id: 21, day: 'Friday', periodNumber: 2, subjectCode: 'CS401', subjectName: 'Cloud Architecture', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 301', startTime: '10:20', endTime: '11:10' },
      { id: 22, day: 'Friday', periodNumber: 3, subjectCode: 'CS402', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 302', startTime: '11:30', endTime: '12:25' },
      { id: 23, day: 'Friday', periodNumber: 4, subjectCode: 'CS403', subjectName: 'Blockchain', subjectType: 'Theory', staffName: 'Prof. David Martinez', roomNumber: 'Room 301', startTime: '01:10', endTime: '02:00' },
    ],
  },
  
  // ===== INFORMATION TECHNOLOGY DEPARTMENT =====
  
  // Second Year - IT - Section A
  {
    id: 5,
    academicYear: '2024-2025',
    department: 'Information Technology',
    year: 'Second Year',
    semester: 'III',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'IT201', subjectName: 'Web Development', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 103', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'IT201', subjectName: 'Web Development', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 103', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:25' },
      { id: 4, day: 'Monday', periodNumber: 4, subjectCode: 'IT251', subjectName: 'Web Lab', subjectType: 'Lab', staffName: 'Prof. Robert Wilson', roomNumber: 'Lab 3 (IT)', startTime: '01:10', endTime: '02:00' },
      { id: 5, day: 'Monday', periodNumber: 5, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 103', startTime: '02:00', endTime: '02:50' },
      
      { id: 6, day: 'Tuesday', periodNumber: 1, subjectCode: 'IT201', subjectName: 'Web Development', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 103', startTime: '09:30', endTime: '10:20' },
      { id: 7, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS203', subjectName: 'Database Management Systems', subjectType: 'Theory', staffName: 'Prof. Michael Brown', roomNumber: 'Room 102', startTime: '10:20', endTime: '11:10' },
      { id: 8, day: 'Tuesday', periodNumber: 3, subjectCode: 'IT251', subjectName: 'Web Lab', subjectType: 'Lab', staffName: 'Prof. Robert Wilson', roomNumber: 'Lab 3 (IT)', startTime: '11:30', endTime: '12:25' },
      { id: 9, day: 'Tuesday', periodNumber: 4, subjectCode: 'CS204', subjectName: 'Operating Systems', subjectType: 'Theory', staffName: 'Dr. Emily Davis', roomNumber: 'Room 103', startTime: '01:10', endTime: '02:00' },
    ],
  },
  
  // Third Year - IT - Section A
  {
    id: 6,
    academicYear: '2024-2025',
    department: 'Information Technology',
    year: 'Third Year',
    semester: 'V',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'IT301', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 103', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'IT301', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 103', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:25' },
      { id: 4, day: 'Monday', periodNumber: 4, subjectCode: 'IT351', subjectName: 'Cloud Lab', subjectType: 'Lab', staffName: 'Prof. Robert Wilson', roomNumber: 'Lab 3 (IT)', startTime: '01:10', endTime: '02:00' },
      
      { id: 5, day: 'Tuesday', periodNumber: 1, subjectCode: 'IT301', subjectName: 'Cloud Computing', subjectType: 'Theory', staffName: 'Prof. Robert Wilson', roomNumber: 'Room 103', startTime: '09:30', endTime: '10:20' },
      { id: 6, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS305', subjectName: 'Cryptography', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 102', startTime: '10:20', endTime: '11:10' },
      { id: 7, day: 'Tuesday', periodNumber: 3, subjectCode: 'IT351', subjectName: 'Cloud Lab', subjectType: 'Lab', staffName: 'Prof. Robert Wilson', roomNumber: 'Lab 3 (IT)', startTime: '11:30', endTime: '12:25' },
    ],
  },
  
  // Final Year - IT - Section A
  {
    id: 7,
    academicYear: '2024-2025',
    department: 'Information Technology',
    year: 'Final Year',
    semester: 'VII',
    section: 'A',
    effectiveDate: '2024-01-15',
    status: 'Approved',
    periods: [
      { id: 1, day: 'Monday', periodNumber: 1, subjectCode: 'IT401', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 103', startTime: '09:30', endTime: '10:20' },
      { id: 2, day: 'Monday', periodNumber: 2, subjectCode: 'IT401', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 103', startTime: '10:20', endTime: '11:10' },
      { id: 3, day: 'Monday', periodNumber: 3, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 102', startTime: '11:30', endTime: '12:25' },
      { id: 4, day: 'Monday', periodNumber: 4, subjectCode: 'CS453', subjectName: 'Major Project', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 1 (CS)', startTime: '01:10', endTime: '02:00' },
      
      { id: 5, day: 'Tuesday', periodNumber: 1, subjectCode: 'IT401', subjectName: 'DevOps', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 103', startTime: '09:30', endTime: '10:20' },
      { id: 6, day: 'Tuesday', periodNumber: 2, subjectCode: 'CS405', subjectName: 'Cyber Security', subjectType: 'Theory', staffName: 'Dr. Lisa Anderson', roomNumber: 'Room 102', startTime: '10:20', endTime: '11:10' },
      { id: 7, day: 'Tuesday', periodNumber: 3, subjectCode: 'CS453', subjectName: 'Major Project', subjectType: 'Lab', staffName: 'Prof. Michael Brown', roomNumber: 'Lab 1 (CS)', startTime: '11:30', endTime: '12:25' },
    ],
  },
  
  // ===== ELECTRONICS & COMMUNICATION DEPARTMENT =====
  
  // Second Year - EC - Section A
  {
    id: 8,
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
    id: 9,
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
