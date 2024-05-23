import * as fertexMysql from './fertex.mysql.js'
import * as fertexJson from './fertex.json.js'

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
    const gases = await fertexJson.getGases(fertilizer);
    const num_gases = gases.length;
    const co2 = 0;

    for (let i = 0; i < num_gases; i++) {
    const N = await fertexJson.getN(fertilizer);
    const PCG = await fertexJson.getPCG(fertilizer);

      co2pergas = kg * N * PCG;
      co2 += co2pergas;
    }

    return co2;
  } catch (err) {
    console.error(err);
  }
}

export {
getCO2
};