import express from 'express';
import {connectUser,inscrirUser,connectAdmin} from '../controllers/userController';

const userRouter=express.Router();

userRouter.post('/inscription',inscrirUser);
userRouter.post('/connexion',connectUser);
userRouter.post('/admin',connectAdmin);

export default userRouter;