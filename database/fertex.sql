DROP DATABASE IF EXISTS fertex;
CREATE DATABASE fertex;
USE fertex;

CREATE TABLE fertilizer (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    emissionFactor FLOAT,
    gases VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE historicEmissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    year INT,
    emissionsKTCO2 FLOAT,
    country VARCHAR(255)
);

create table emissionFactor{
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    emissionFactor FLOAT,
    gases VARCHAR(255)
};


-- Inserting data into the historicEmissions table
INSERT INTO historicEmissions (year, emissionsKTCO2, country) VALUES
('2000', 10000, 'mexico'),
('2001', 15000, 'usa'),
('2002', 20000, 'canada');