-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2023 at 06:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `empId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `empType` varchar(20) DEFAULT NULL,
  `experience` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`empId`, `name`, `designation`, `empType`, `experience`) VALUES
(1, 'Corey Curtis', 'Senior Developer', 'Full time', '02 Years'),
(2, 'Alfonso Stanton', 'Senior Front-End Developer', 'Part Time', '03 Years'),
(3, 'Justin Aminoff', 'Senior Developer', 'Contract Basis', '02 Years'),
(4, 'Leo Geidt', 'User Experience Designer', 'Other', '01 Year'),
(5, 'Jaydon Workman', 'Senior Developer', 'Part Time', '03 Years'),
(6, 'Buben Levin', 'Senior Developer', 'Contract Basis', '03 Years'),
(7, 'Omar Passaquindici Arcand', 'Senior Developer', 'Full Time', '02 Years'),
(8, 'Phillip Mango', 'Senior Developer', 'Contract Basis', '05 Years'),
(9, 'Martin Workman', 'Sales Officer', 'Full Time', '02 Years'),
(10, 'Ruben Dokidis', 'Senior Developer', 'Full Time', '06 Years'),
(11, 'Ruben Dokidis', 'Guest Admin', 'Part Time', '09 Years');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`empId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `empId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
