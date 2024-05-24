import * as fertexService from './fertex.service.js'

const getCO2 = async (req, res) => {
  const {
    params: { fertilizer, kg },
  } = req;
  if (!fertilizer || !kg) {
    return;
  }

  try {
    const co2 = await fertexService.getCO2(fertilizer, kg);
    res.send({ status: "OK", data: co2 });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message });
  }
}

const getCountryYear = async (req, res) => {
  const {
    params: { country, year },
  } = req;
  if (!country || !year) {
    return;
  }

  try {
    const historic = await fertexService.getCountryYear(country, year);
    res.send({ status: "OK", data: historic });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message });
  }
}

const getYear = async (req, res) => {
  const {
    params: { year },
  } = req;
  if (!year) {
    return;
  }

  try {
    const historic = await fertexService.getYear(year);
    res.send({ status: "OK", data: historic });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message });
  }
}

export {
  getCO2,
  getCountryYear,
  getYear
};