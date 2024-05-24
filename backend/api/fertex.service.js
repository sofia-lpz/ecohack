import * as fertexMysql from './fertex.mysql.js'

const getCalculate = async (fertilizer, nitrogen) => {
  try {
    const results = await fertexMysql.getCalculate(fertilizer, nitrogen);
    if (results && results.length > 0) {
      const { EF, GWP } = results[0];
      const nitrogenDecimal = nitrogen / 100;
      const calculation = fertilizer * nitrogenDecimal * EF * GWP;
      return parseFloat(calculation.toFixed(4));
    } else {
      throw new Error('No results from database');
    }
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

const getYearRange = async (yearstart, yearend) => {
  try {
    const historic = await fertexMysql.getYearRange(yearstart, yearend);
    return historic;
  } catch (err) {
    console.error(err);
  }
}

const getCountryYearRange = async (country, yearstart, yearend) => {
  try {
    const historic = await fertexMysql.getCountryYearRange(country, yearstart, yearend);
    return historic;
  } catch (err) {
    console.error(err);
  }
}

export {
  getCalculate,
  getCountryYear,
  getYear,
  getYearRange,
  getCountryYearRange
};