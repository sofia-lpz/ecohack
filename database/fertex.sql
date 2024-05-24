DROP DATABASE IF EXISTS fertex;
CREATE DATABASE fertex;
USE fertex;

CREATE TABLE fertilizer (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    N INT NOT NULL,
    PCG INT NOT NULL,
    gases VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE historicEmissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    year INT,
    emissionsKTCO2 FLOAT,
    country VARCHAR(255)
);


-- Inserting data into the fertilizer table
INSERT INTO fertilizer (name, N, PCG, gases) VALUES
('Fertilizer A', 20, 30, 'CO2'),
('Fertilizer B', 25, 35, 'N2O'),
('Fertilizer C', 30, 40, 'CH4');

-- Inserting data into the historicEmissions table
INSERT INTO historicEmissions (year, emissionsKTCO2, country) VALUES
('2000', 10000, 'mexico'),
('2001', 15000, 'usa'),
('2002', 20000, 'canada');