-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-01-2016 a las 14:37:00
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `basededatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `test`
--

INSERT INTO `test` (`Nombre`, `Apellido`, `Email`) VALUES
('Gabriela', 'Saldaña', 'ela.nfo@gmail.com'),
('Manchas', 'SaldanaAguilar', 'manchas@hotmail.com'),
('Manchas', 'Saldaña Aguilar', 'man@outlook.com'),
('Richi', 'Orozco Soto', 'Richi@outlook.com'),
('Richi', 'Orozco Soto', 'Richi@outlook.com'),
('Richi', 'Orozco Soto', 'Richi@outlook.com'),
('Richi', 'Orozco Soto', 'Richi@outlook.com'),
('Richi', 'Orozco Soto', 'Richi@outlook.com'),
('Papu', 'Saldana', 'asaldana@gmail.com'),
('Papu', 'Saldana', 'asaldana@gmail.com'),
('Ricardo ', 'Orozco Soto', 'Richi@outlook.com'),
('Gabriela', 'SaldanaAguilar', 'asaldana@gmail.com'),
('Gabriela', 'SaldanaAguilar', 'asaldana@gmail.com'),
('Arnulfo', 'SaldanaAguilar', 'asaldanaroa@gmail.com'),
('Gabriela', 'Saldana Aguilar', 'ela.ri.bag@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
