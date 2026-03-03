import express from 'express';
import {connectUser,inscrirUser,connectAdmin,deleteUser} from '../controllers/userController.js';

const userRouter=express.Router();

userRouter.post('/inscription',inscrirUser);
userRouter.post('/connexion',connectUser);
userRouter.post('/admin',connectAdmin);
userRouter.delete("/:id",deleteUser)

export default userRouter;