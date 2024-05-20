import express from 'express'
import bodyParser from 'body-parser';
import {router} from './ipcc.routes.js'
import dotenv from 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

// ipcc

app.use(bodyParser.json());
app.use("/api/", router);

app.listen(PORT, () => {
  console.log(`API ipcc escuchando en el puerto ${PORT}`);
});

