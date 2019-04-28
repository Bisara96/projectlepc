-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2019 at 05:57 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db2`
--

-- --------------------------------------------------------

--
-- Table structure for table `formdata`
--

CREATE TABLE `formdata` (
  `age` date NOT NULL,
  `Address` varchar(250) NOT NULL,
  `dateOfBirth` text NOT NULL,
  `Phone_No` varchar(250) NOT NULL,
  `emailAdd` varchar(250) NOT NULL,
  `Postal_Code` varchar(250) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `loginPassword` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formdata`
--

INSERT INTO `formdata` (`age`, `Address`, `dateOfBirth`, `Phone_No`, `emailAdd`, `Postal_Code`, `firstName`, `lastName`, `loginPassword`) VALUES
('0000-00-00', 'no 1 Some address', '20121212', '776993529', 'buwanekathilakasiri@gmail.com', '10100', 'W B', 'THILAKASIRI', 'admin123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
