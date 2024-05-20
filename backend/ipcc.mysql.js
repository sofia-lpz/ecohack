import mysql from "mysql2/promise"

//MISSING QUERIES FOR THE FUNCTIONS, BECAUSE OF PENDING VIEWS

async function connectToDB()
{
  return await  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  });
}

async function getCarreras()
{
  let connection = null;
  try
  {
    connection = await connectToDB()

    const [results, _] = await connection.query('SELECT carrera from programa')

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
      console.log('Connection closed successfuly')
    }
  }
}

async function getAlumno(matricula)
{
  let connection = null
  try
  {
    connection = await connectToDB()

    const query = `
    `;

    const [results, _] = await connection.query(query, [matricula])

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
      console.log('Connection closed successfuly')
    }
  }
}

async function getCarreraSemestre(carrera, semestre)
{
  let connection = null
  try
  {
    connection = await connectToDB()

    const query = `
    `;

    const [results, _] = await connection.query(query, [carrera, semestre])

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

async function getAlumnoActual(matricula)
{
  let connection = null
  try
  {
    connection = await connectToDB()

    const query = `
    `;
    const [results, _] = await connection.query(query, [matricula])

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
      console.log('Connection closed successfuly')
    }
  }
}

export {
  getCarreras,
  getAlumno,
  getCarreraSemestre,
  getAlumnoActual
};


