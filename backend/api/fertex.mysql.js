import mysql from "mysql2/promise"

//MISSING QUERIES FOR THE FUNCTIONS, BECAUSE OF PENDING VIEWS

async function connectToDB() {
  return await mysql.createConnection({
    host: "echohack.c3coace2uz12.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "echo123..",
    database: "fertex"
  });
}

async function getCalculate(fertilizer, nitrogen)
{
  let connection = null
  try
  {
    connection = await connectToDB()

const query = `SELECT EF, GWP FROM n2oData`;

    const [results, _] = await connection.query(query)

    console.log(`${results.length} rows returned`)
    return results
  }
  catch(error)
  {
    console.log(error)
  }
  finally
  {
    if(connection !== null)
    {
      connection.end()
      console.log('Connection closed successfully')
    }
  }
}

async function getCountryYear(country, year)
{
  let connection = null
  try
  {
    connection = await connectToDB()

    const query = `SELECT emissionsKTCO2 FROM historicEmissions WHERE country = ? AND year = ?
`;

    const [results, _] = await connection.query(query, [country, year])

    console.log(`${results.length} rows returned`)
    return results
  }
  catch(error)
  {
    console.log(error)
  }
  finally
  {
    if(connection !== null)
    {
      connection.end()
      console.log('Connection closed successfully')
    }
  }
}

async function getYear(year)
{
  let connection = null
  try
  {
    connection = await connectToDB()

    const query = `SELECT SUM(emissionsKTCO2) as total_emissions
FROM historicEmissions
WHERE year = ?
`;
    const [results, _] = await connection.query(query, [year])

    console.log(`${results.length} rows returned`)
    return results
  }
  catch(error)
  {
    console.log(error)
  }
  finally
  {
    if(connection !== null)
    {
      connection.end()
      console.log('Connection closed successfully')
    }
  }
}

async function getYearRange(yearstart, yearend)
{
  let connection = null
  try
  {
    connection = await connectToDB()

    const query = `SELECT year, SUM(emissionsKTCO2) as total_emissions
    FROM historicEmissions
    WHERE year BETWEEN ? AND ?
    GROUP BY year
`;
    const [results, _] = await connection.query(query, [yearstart, yearend])

    console.log(`${results.length} rows returned`)
    return results
  }
  catch(error)
  {
    console.log(error)
  }
  finally
  {
    if(connection !== null)
    {
      connection.end()
      console.log('Connection closed successfully')
    }
  }
}

async function getCountryYearRange(country, yearstart, yearend)
{
  let connection = null
  try
  {
    connection = await connectToDB()

    const query = `SELECT emissionsKTCO2, year
FROM historicEmissions
WHERE country = ? AND year BETWEEN ? AND ?
`;
    const [results, _] = await connection.query(query, [country, yearstart, yearend])

    console.log(`${results.length} rows returned`)
    return results
  }
  catch(error)
  {
    console.log(error)
  }
  finally
  {
    if(connection !== null)
    {
      connection.end()
      console.log('Connection closed successfully')
    }
  }
}

export {
  getCalculate,
  getCountryYear,
  getYear,
  getYearRange,
  getCountryYearRange
};


