import * as fertexService from './fertex.service.js'

const getCalculate = async (req, res) => {
  const {
    params: { fertilizer, nitrogen },
  } = req;
  if (!fertilizer || !nitrogen) {
    return;
  }

  try {
    const result = await fertexService.getCalculate(fertilizer, nitrogen);
    res.send({ status: "OK", data: result });
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

const getYearRange = async (req, res) => {
  const {
    params: { yearstart, yearend },
  } = req;
  if (!yearstart || !yearend) {
    return;
  }

  try {
    const historic = await fertexService.getYearRange(yearstart, yearend);
    res.send({ status: "OK", data: historic });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message });
  }
}

const getCountryYearRange = async (req, res) => {
  const {
    params: { country, yearstart, yearend },
  } = req;
  if (!country || !yearstart || !yearend) {
    return;
  }

  try {
    const historic = await fertexService.getCountryYearRange(country, yearstart, yearend);
    res.send({ status: "OK", data: historic });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "Error", data: error.message });
  }
}

export {
  getCalculate,
  getCountryYear,
  getYear,
  getYearRange,
  getCountryYearRange

};