import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser';
import {router} from './api/fertex.router.js'
import dotenv from 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

// ipcc

app.use(express.json())
app.use(express.static('public'))  

app.use(bodyParser.json());
app.use("/api", router);


app.get('/', (req, res)=>
    {
        fs.readFile('./public/pages/home.html', 'utf8', 
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
  
    app.get('/about', (req, res)=>
    {
        fs.readFile('./public/pages/about.html', 'utf8', 
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
  
    app.get('/buisnesses', (req, res)=>
    {
        fs.readFile('./public/pages/buisnesses.html', 'utf8', 
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
  
    app.get('/developers', (req, res)=>
    {
        fs.readFile('./public/pages/developers.html', 'utf8', 
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
  
    app.get('/credits', (req, res)=>
    {
        fs.readFile('./public/pages/credits.html', 'utf8', 
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
  

app.listen(PORT, () => {
  console.log(`API ipcc escuchando en el puerto ${PORT}`);
});

