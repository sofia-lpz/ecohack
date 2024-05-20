import * as pronosService from './ipcc.service.js'

const getCarreras = async (req, res) => {
  try {
    const carreras = await pronosService.getCarreras();
    res.send({ status: "OK", data: carreras });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message});
  }
};

const getAlumno = async (req, res) => {

  const {
    params: { matricula },
  } = req;
  if (!matricula) {
    return;
  }

  try {
    const alumno = await pronosService.getAlumno(matricula);
    res.send({ status: "OK", data: alumno });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message });
  }
};


const getAlumnoActual = async (req, res) => {
  const {
    params: { matricula },
  } = req;
  if (!matricula) {
    return;
  }

  try {
    const alumno = await pronosService.getAlumnoActual(matricula);
    res.send({ status: "OK", data: alumno });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message });
  }
}

const getCarreraSemestre = async (req, res) => {
  const {
    params: { carrera, semestre },
  } = req;
  if (!carrera || !semestre) {
    return;
  }

  try {
    const pronostico = await pronosService.getCarreraSemestre(carrera, semestre);
    res.send({ status: "OK", data: pronostico });
  }
catch(error){
  console.error(error);
  res.status(500).send({ status: "Error", data: error.message });
}
};

export {
  getCarreras,
  getAlumno,
  getCarreraSemestre,
  getAlumnoActual,
};