import express from 'express'
import * as fertexController from './fertex.controller.js'

const router = express.Router();

router.get("/co2/:fertilizer/:kg/", fertexController.getCO2);

export { router }