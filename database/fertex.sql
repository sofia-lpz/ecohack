DROP DATABASE IF EXISTS fertex;
CREATE DATABASE fertex;
USE fertex;

CREATE TABLE n2oData (
    id INT NOT NULL AUTO_INCREMENT,
    GWP FLOAT Default 273,
    EF FLOAT Default 0.01,
    primary key (id)
);

CREATE TABLE historicEmissions (
    id INT AUTO_INCREMENT,
    category VARCHAR(255),
    year INT,
    emissionsKTCO2 FLOAT,
    country VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO n2oData (GWP, EF) VALUES (273, 0.01);