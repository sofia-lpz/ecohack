import express from 'express'
import * as fertexController from './fertex.controller.js'

const router = express.Router();

//calculator
router.get("/calculate/:fertilizer/:nitrogen/", fertexController.getCalculate);

//historic
router.get("/historic/:country/:year", fertexController.getCountryYear);
router.get("/historic/:year", fertexController.getYear);

router.get("/historic/range/:yearstart/:yearend", fertexController.getYearRange);
router.get("/historic/range/:country/:yearstart/:yearend", fertexController.getCountryYearRange);

router.get('/', (req, res) => {
    res.send('Hello from /api');
  });

export { router }