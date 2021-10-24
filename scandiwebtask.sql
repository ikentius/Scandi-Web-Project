-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2021 at 04:59 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scandiwebtask`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `sku` varchar(20) NOT NULL,
  `name` tinytext NOT NULL,
  `price` double NOT NULL,
  `type` varchar(10) NOT NULL,
  `size` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `sku`, `name`, `price`, `type`, `size`, `weight`, `height`, `width`, `length`) VALUES
(11, 'MYSKU213', 'kenichi', 2, 'DVD', 500, NULL, NULL, NULL, NULL),
(29, 'OLALA123', 'Namaewa', 20, 'Furniture', NULL, NULL, 50, 50, 50),
(44, 'SKUKUS69420', 'Tales Of Demons and Gods', 69, 'Book', NULL, 200, NULL, NULL, NULL),
(45, 'SKUSKUSKU321', 'Berserk', 20, 'Book', NULL, 228, NULL, NULL, NULL),
(46, 'MYMYSKUSKU333', 'React Tutorials', 69, 'Book', NULL, 50, NULL, NULL, NULL),
(47, 'SKUSKU333', 'IKEA VANGUARD', 300, 'Furniture', NULL, NULL, 150, 150, 150),
(48, 'SKUKUSKUS333', 'IKA MJOLNIR', 20, 'Furniture', NULL, NULL, 500, 500, 500),
(49, 'KUSKUSSKUU33', 'PDO PLEASE WORK', 250, 'DVD', 69420, NULL, NULL, NULL, NULL),
(50, 'KUSKUSKUS69696', 'IMUSHAVE GEXVEWEBI', 69, 'DVD', 100, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
