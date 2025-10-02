
CREATE DATABASE IF NOT EXISTS `plantio` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `plantio`;

CREATE TABLE IF NOT EXISTS `colheita` (
  `IdColheita` int(11) NOT NULL AUTO_INCREMENT,
  `Plantio_IdPlantio` int(11) NOT NULL,
  `Data_colheita` date NOT NULL,
  `Quantidade_colhida` int(11) NOT NULL DEFAULT 0,
  `Qualidade` varchar(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdColheita`),
  KEY `FK_Plantio_Colheita` (`Plantio_IdPlantio`),
  CONSTRAINT `FK_Plantio_Colheita` FOREIGN KEY (`Plantio_IdPlantio`) REFERENCES `plantio` (`idPlantio`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE IF NOT EXISTS `irrigacao` (
  `Id_Irrigacao` int(11) NOT NULL AUTO_INCREMENT,
  `Horario_Inicial` time NOT NULL,
  `Horario_Final` time NOT NULL,
  `Plantio_idPlantio` int(11) NOT NULL,
  PRIMARY KEY (`Id_Irrigacao`),
  KEY `FK_Plantio_Irrigacao` (`Plantio_idPlantio`),
  CONSTRAINT `FK_Plantio_Irrigacao` FOREIGN KEY (`Plantio_idPlantio`) REFERENCES `plantio` (`idPlantio`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE IF NOT EXISTS `plantio` (
  `idPlantio` int(11) NOT NULL AUTO_INCREMENT,
  `Variedade` varchar(50) NOT NULL,
  `Data_plantio` date NOT NULL,
  `Quantidade_plantada` int(11) NOT NULL,
  `Localizacao` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`idPlantio`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE USER 'dev1b'@'%' IDENTIFIED BY 'dev1b';
GRANT ALL PRIVILEGES ON plantio.* TO 'dev1b'@'%';	
FLUSH PRIVILEGES;
