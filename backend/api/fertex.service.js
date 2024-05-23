import * as fertexMysql from './fertex.mysql.js'

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



const getCO2 = async (fertilizer, kg) => {
  try {
    const N = await fertexMysql.getN(fertilizer);
    const PCG = await fertexMysql.getPCG(fertilizer);
    const num_gases = await fertexMysql.getNumGases(fertilizer);
    const co2 = 0;

    for (let i = 0; i < num_gases; i++) {
      co2pergas = kg * N * PCG;
      co2 += co2pergas;
    }

    return co2;
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