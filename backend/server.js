import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/coudinary.js';
import userRouter from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from "cookie-parser";

//App config 
const app=express();
const port=process.env.PORT  || 4000
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use((err,req,res,next)=>{
   const Status=err.status || 500;
   const Message=err.message || "Erreur interne du serveur"

   return res.status(Status).json({
    success:false,
    Status,Message
    
   });
});


//api endpoints
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
  res.send("Api fonctionnelle")
})
app.use("/api/auth",authRoute)
/*app.use("/api/services",serviceRouter)
app.use("/api/demandes",demandeRouter)
app.use("/api/conversations",conversationRouter)
app.use("/api/messages",messageRouter)
app.use("/api/reviews",reviewRouter)*/


app.listen(port,()=>{
  console.log(` Le Serveur fonctionne sur le port ${port}`)
})