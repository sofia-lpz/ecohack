import * as pronosMysql from './ipcc.mysql.js'

const getCarreras = async () => {
  try {
    const carreras = await pronosMysql.getCarreras();
    return carreras;
  } catch (err) {
    console.error(err);
  }
};

const getAlumno = async (matricula) => {
  try {
    const alumno = await pronosMysql.getAlumno(matricula);
    return alumno;
  } catch (err) {
    console.error(err);
  }
};

const getAlumnoActual = async (matricula) => {
  try {
    const alumno = await pronosMysql.getAlumnoActual(matricula);
    return alumno;
  } catch (err) {
    console.error(err);
  }
};

const getCarreraSemestre = async (carrera, semestre) => {
  try {
    const carreraSemestre = await pronosMysql.getCarreraSemestre(carrera, semestre);
    return carreraSemestre;
  } catch (err) {
    console.error(err);
  }
}

export {
  getCarreras,
  getAlumno,
  getCarreraSemestre,
  getAlumnoActual
};