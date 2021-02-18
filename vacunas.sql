CREATE TABLE IF NOT EXISTS `vacunas` (
  `id` INT PRIMARY KEY,
  `nombre` VARCHAR(40) NOT NULL,
  `dosis_pfizer` INT NOT NULL,
  `dosis_moderna` INT NOT NULL,
  `personas` INT NOT NULL
  )
ENGINE = InnoDB;

INSERT INTO  `vacunas` (`id`,`nombre`, `dosis_pfizer`, `dosis_moderna`, `personas`) VALUES
('1','Andalucia', '244620', '6800', '15193'),('2','Aragon', '41265', '1200', '1731'),
('3','Asturias', '44195', '1200', '5664'),('4','Baleares', '22590', '600', '1514'),
('5','Canarias', '46185', '1300', '1744'),('6','Cantabria', '20625', '500', '241'),
('7','Castilla y Leon', '93315', '2500', '5296'),('8','Castilla La Mancha', '61875', '1700', '1202'),
('9','Cataluña', '211220', '5800', '2598'),('10','C. Valenciana', '109000', '2900', '2956'),
('11','Extremadura', '39275', '1000', '638'),('12','Galicia', '66805', '1800', '3861'),
('13','La Rioja', '11765', '200', '267'),('14','Madrid', '171915', '4700', '1738'),
('15','Murcia', '45185', '1200', '1784'),('16','Navarra', '20625', '500', '767'),
('17','Pais Vasco', '55980', '1400', '1333'),('18','Ceuta', '1980', '200', '326'),
('19','Melilla', '1980', '200', '203');