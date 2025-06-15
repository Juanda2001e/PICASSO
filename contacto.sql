-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2025 at 03:18 PM
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
-- Database: `contacto`
--

-- --------------------------------------------------------

--
-- Table structure for table `f_contacto`
--

CREATE TABLE `f_contacto` (
  `id` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` int(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `f_contacto`
--

INSERT INTO `f_contacto` (`id`, `nombre`, `telefono`, `email`) VALUES
(11, 'camilo', 234512345, 'cami17@gmail.com'),
(12, 'juan', 3142, 'juandaestra17@gmail.com'),
(13, 'juan', 3142, 'juandaestra17@gmail.com'),
(14, 'juan', 3142, 'juandaestra17@gmail.com'),
(15, 'juan', 0, 'juand17@gmail.com'),
(16, 'juan', 23423, 'jua7@gmail.com'),
(17, 'juan', 23423, 'jua7@gmail.com'),
(18, 'andres', 23423, 'andres17@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `f_contacto`
--
ALTER TABLE `f_contacto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `f_contacto`
--
ALTER TABLE `f_contacto`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
