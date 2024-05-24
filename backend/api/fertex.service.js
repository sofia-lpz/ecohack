import * as fertexMysql from './fertex.mysql.js'


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

const getCountryYear = async (country, year) => {
  try {
    const historic = await fertexMysql.getCountryYear(country, year);
    return historic;
  } catch (err) {
    console.error(err);
  }
}

const getYear = async (year) => {
  try {
    const historic = await fertexMysql.getYear(year);
    return historic;
  } catch (err) {
    console.error(err);
  }
}

export {
  getCO2,
  getCountryYear,
  getYear
};