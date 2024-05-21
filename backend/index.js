import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser';
import {router} from './ipcc.routes.js'
import dotenv from 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

// ipcc

app.use(express.json())
app.use(express.static('public'))  


app.get('/', (req, res)=>
  {
      fs.readFile('./public/home.html', 'utf8', 
      (err, html) => {
          if(err)
          {
              res.status(500).send('There was an error: ' + err)
              return 
          }
          
          res.send(html)
          console.log("Page sent")
      })
  })


app.use(bodyParser.json());
app.use("/api/", router);

app.listen(PORT, () => {
  console.log(`API ipcc escuchando en el puerto ${PORT}`);
});

