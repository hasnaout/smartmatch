import express from 'express';
import {connectUser,inscrirUser,connectAdmin,deleteUser} from '../controllers/userController.js';

const userRouter=express.Router();

userRouter.get('/test',deleteUser)
userRouter.post('/inscription',inscrirUser);
userRouter.post('/connexion',connectUser);
userRouter.post('/admin',connectAdmin);

export default userRouter;