import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';

//App config 
const app=express()
const port=process.env.PORT || 4000
connectDB()

//Middlewares
app.use(express.json())
app.use(cors())


//api endpoints
app.get('/',(req,res)=>{
  res.send("Api fonctionnelle")
})


app.listen(port,()=>{
  console.log(` Le Serveur fonctionne sur le port ${port}`)
})