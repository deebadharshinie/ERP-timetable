-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2026 at 08:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nscet_timetable`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `department_id` int(11) NOT NULL,
  `year` varchar(50) NOT NULL,
  `section` varchar(10) NOT NULL DEFAULT 'A',
  `semester` varchar(20) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `department_code` varchar(10) NOT NULL,
  `department_name` varchar(100) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `department_code`, `department_name`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'CSE', 'CSE', 1, '2026-02-19 12:33:30', '2026-02-19 12:33:30'),
(2, 'IT', 'IT', 1, '2026-02-19 12:33:30', '2026-02-19 12:33:30'),
(3, 'AIDS', 'AIDS', 1, '2026-02-19 12:33:30', '2026-02-19 12:33:30'),
(4, 'CIVIL', 'CIVIL', 1, '2026-02-19 12:33:30', '2026-02-19 12:33:30'),
(5, 'ECE', 'ECE', 1, '2026-02-19 12:33:30', '2026-02-19 12:33:30'),
(6, 'EEE', 'EEE', 1, '2026-02-19 12:33:30', '2026-02-19 12:33:30'),
(7, 'MECH', 'MECH', 1, '2026-02-19 12:33:30', '2026-02-19 12:33:30');

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

CREATE TABLE `faculties` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `employee_id` varchar(20) NOT NULL,
  `department_id` int(11) NOT NULL,
  `designation` varchar(50) DEFAULT 'Assistant Professor',
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `room_number` varchar(20) NOT NULL,
  `room_name` varchar(100) DEFAULT NULL,
  `room_type` enum('Classroom','Lab','Seminar Hall','Auditorium','Staff Room') DEFAULT 'Classroom',
  `capacity` int(11) DEFAULT 60,
  `building` varchar(50) DEFAULT NULL,
  `floor` int(11) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `subject_code` varchar(20) NOT NULL,
  `subject_name` varchar(100) NOT NULL,
  `department_id` int(11) NOT NULL,
  `subject_type` enum('Theory','Lab','Theory/Lab') DEFAULT 'Theory',
  `credits` int(11) DEFAULT 0,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

CREATE TABLE `timetable` (
  `id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `faculty_id` int(11) NOT NULL,
  `day_of_week` enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday') NOT NULL,
  `time_slot_id` int(11) NOT NULL,
  `room_id` int(11) DEFAULT NULL,
  `semester` varchar(20) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `timetable_periods`
--

CREATE TABLE `timetable_periods` (
  `id` int(11) NOT NULL,
  `timetable_id` int(11) NOT NULL,
  `day` enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday') NOT NULL,
  `period_no` varchar(20) NOT NULL,
  `start_time` varchar(20) NOT NULL,
  `end_time` varchar(20) NOT NULL,
  `subject_code` varchar(20) DEFAULT '',
  `subject_name` varchar(100) DEFAULT '',
  `faculty_name` varchar(100) DEFAULT '',
  `subject_type` enum('Theory','Lab','Free Period','Break','Lunch') DEFAULT 'Theory',
  `room_number` varchar(50) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `time_slots`
--

CREATE TABLE `time_slots` (
  `id` int(11) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `period_number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `time_slots`
--

INSERT INTO `time_slots` (`id`, `start_time`, `end_time`, `period_number`) VALUES
(1, '09:00:00', '10:00:00', 1),
(2, '10:00:00', '11:00:00', 2),
(3, '11:15:00', '12:15:00', 3),
(4, '13:15:00', '14:15:00', 4),
(5, '14:15:00', '15:15:00', 5),
(6, '15:30:00', '16:30:00', 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('Admin','Faculty','HOD','Class Incharge') DEFAULT 'Faculty',
  `departmentId` int(11) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `department_code` (`department_code`),
  ADD UNIQUE KEY `department_code_2` (`department_code`),
  ADD UNIQUE KEY `department_code_3` (`department_code`),
  ADD UNIQUE KEY `department_code_4` (`department_code`),
  ADD UNIQUE KEY `department_code_5` (`department_code`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employee_id` (`employee_id`),
  ADD UNIQUE KEY `employee_id_2` (`employee_id`),
  ADD UNIQUE KEY `employee_id_3` (`employee_id`),
  ADD UNIQUE KEY `employee_id_4` (`employee_id`),
  ADD UNIQUE KEY `employee_id_5` (`employee_id`),
  ADD UNIQUE KEY `employee_id_6` (`employee_id`),
  ADD UNIQUE KEY `employee_id_7` (`employee_id`),
  ADD UNIQUE KEY `employee_id_8` (`employee_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `room_number` (`room_number`),
  ADD UNIQUE KEY `room_number_2` (`room_number`),
  ADD UNIQUE KEY `room_number_3` (`room_number`),
  ADD UNIQUE KEY `room_number_4` (`room_number`),
  ADD UNIQUE KEY `room_number_5` (`room_number`),
  ADD UNIQUE KEY `room_number_6` (`room_number`),
  ADD UNIQUE KEY `room_number_7` (`room_number`),
  ADD UNIQUE KEY `room_number_8` (`room_number`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subject_code` (`subject_code`),
  ADD UNIQUE KEY `subject_code_2` (`subject_code`),
  ADD UNIQUE KEY `subject_code_3` (`subject_code`),
  ADD UNIQUE KEY `subject_code_4` (`subject_code`),
  ADD UNIQUE KEY `subject_code_5` (`subject_code`),
  ADD UNIQUE KEY `subject_code_6` (`subject_code`),
  ADD UNIQUE KEY `subject_code_7` (`subject_code`),
  ADD UNIQUE KEY `subject_code_8` (`subject_code`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id`),
  ADD KEY `timetable_class_fk` (`class_id`),
  ADD KEY `timetable_subject_fk` (`subject_id`),
  ADD KEY `timetable_faculty_fk` (`faculty_id`),
  ADD KEY `timetable_slot_fk` (`time_slot_id`),
  ADD KEY `timetable_room_fk` (`room_id`);

--
-- Indexes for table `timetable_periods`
--
ALTER TABLE `timetable_periods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `timetable_periods_timetable_id_day_period_no` (`timetable_id`,`day`,`period_no`),
  ADD KEY `timetable_periods_timetable_id` (`timetable_id`);

--
-- Indexes for table `time_slots`
--
ALTER TABLE `time_slots`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `period_number` (`period_number`),
  ADD UNIQUE KEY `period_number_2` (`period_number`),
  ADD UNIQUE KEY `period_number_3` (`period_number`),
  ADD UNIQUE KEY `period_number_4` (`period_number`),
  ADD UNIQUE KEY `period_number_5` (`period_number`),
  ADD UNIQUE KEY `period_number_6` (`period_number`),
  ADD UNIQUE KEY `period_number_7` (`period_number`),
  ADD UNIQUE KEY `period_number_8` (`period_number`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `users_email` (`email`),
  ADD KEY `users_role` (`role`),
  ADD KEY `users_department_id` (`departmentId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `faculties`
--
ALTER TABLE `faculties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timetable`
--
ALTER TABLE `timetable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timetable_periods`
--
ALTER TABLE `timetable_periods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `time_slots`
--
ALTER TABLE `time_slots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `faculties`
--
ALTER TABLE `faculties`
  ADD CONSTRAINT `faculties_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `timetable`
--
ALTER TABLE `timetable`
  ADD CONSTRAINT `timetable_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `timetable_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `timetable_ibfk_3` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `timetable_ibfk_4` FOREIGN KEY (`time_slot_id`) REFERENCES `time_slots` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `timetable_ibfk_5` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `timetable_periods`
--
ALTER TABLE `timetable_periods`
  ADD CONSTRAINT `timetable_periods_ibfk_1` FOREIGN KEY (`timetable_id`) REFERENCES `timetable` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
