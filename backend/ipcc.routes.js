import express from 'express'
import * as pronosController from './ipcc.controller.js'

const router = express.Router();

router.get("/carreras", pronosController.getCarreras);
//regresa nombre de carrera itc, itd, etc

router.get("/alumno/:matricula", pronosController.getAlumno);
//regresa pronostico de materias para alumno

router.get("/:carrera/:semestre", pronosController.getCarreraSemestre);
//regresa pronostico de todas las materias para el proximo semestre

router.get("/alumno/actual/:matricula", pronosController.getAlumnoActual)
//regresa datos de inscripcion actual del alumno

//CONVENTIONS FOR ROUTES
//carreras son ITC, ITD, etc
//programas son itc19, itc26, etc

export { router }