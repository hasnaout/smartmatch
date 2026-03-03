import express from 'express';
 const authRoute=express.Router();
import {deconnexion,connexion,inscription} from '../controllers/authController.js'
authRoute.post("/inscription",inscription)
authRoute.post("/connexion",connexion)
authRoute.post("/deconnexion",deconnexion)

export default authRoute;