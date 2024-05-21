CREATE DATABASE bd;
USE bd;

CREATE TABLE alumno(
    alumnoId VARCHAR(15) NOT NULL,  -- Matrícula AXXXXXXX
    nombre VARCHAR(50) NOT NULL,
    semestre TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (alumnoId)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;

CREATE TABLE uf(
    ufClave VARCHAR(50),
    nombre VARCHAR(50),
    creditos TINYINT UNSIGNED NOT NULL,
    semestre TINYINT UNSIGNED NOT NULL,
    periodo1 TINYINT UNSIGNED NOT NULL,
    periodo2 TINYINT UNSIGNED NOT NULL,
    periodo3 TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (ufClave)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;

CREATE TABLE programa(
    programaId VARCHAR(50), -- itd19 etc
    carrera VARCHAR(50),
    PRIMARY KEY (programaId)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;

CREATE TABLE uf_equivalencia(
    ufClave VARCHAR(50),
    ufClaveEquivalencia VARCHAR(50),
    PRIMARY KEY (ufClave, ufClaveEquivalencia),
    FOREIGN KEY (ufClave) REFERENCES uf(ufClave),
    FOREIGN KEY (ufClaveEquivalencia) REFERENCES uf(ufClave)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;

CREATE TABLE uf_requisitos(
    ufClave VARCHAR(50) NOT NULL,
    ufClaveRequisito VARCHAR(50) NOT NULL,
    PRIMARY KEY (ufClave, ufClaveRequisito),
    FOREIGN KEY (ufClave) REFERENCES uf(ufClave),
    FOREIGN KEY (ufClaveRequisito) REFERENCES uf(ufClave)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;

CREATE TABLE programa_uf(
    ufClave VARCHAR(50) NOT NULL,
    programaId VARCHAR(50) NOT NULL,

    PRIMARY KEY (programaId, ufClave),
    FOREIGN KEY (ufClave) REFERENCES uf(ufClave),
    FOREIGN KEY (programaId) REFERENCES programa(programaId)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;

CREATE TABLE programa_alumno(
    alumnoId CHAR(9) NOT NULL,
    programaId VARCHAR(50) NOT NULL,
    PRIMARY KEY (alumnoId, programaId),
    FOREIGN KEY (alumnoId) REFERENCES alumno(alumnoId),
    FOREIGN KEY (programaId) REFERENCES programa(programaId)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;

CREATE TABLE alumno_uf(
    alumnoId VARCHAR(9) NOT NULL,
    ufClave VARCHAR(50) NOT NULL,
    sesion ENUM('invierno', 'verano', 'ene-jun', 'ago-dic') NOT NULL,
    anio YEAR NOT NULL,
    acreditado bool DEFAULT true,
    PRIMARY KEY (alumnoId, ufClave, sesion, anio),
    FOREIGN KEY (alumnoId) REFERENCES alumno(alumnoId),
    FOREIGN KEY (ufClave) REFERENCES uf(ufClave)
) ENGINE=myisam DEFAULT CHARSET=utf8mb4;
