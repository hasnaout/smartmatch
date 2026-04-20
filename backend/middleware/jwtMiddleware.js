import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
export const verifyToken=(req,res,next)=>{
try {
  
  const token =req.cookies.accessToken;
  if(!token){
     return next(createError(401,"Vous n'etes pas authentifié"))
  }
  const decode=jwt.verify(token,process.env.JWT_SECRET);
   // On attache l'utilisateur à la requête
  req.user=decode;
  next(); // passe au controller
} catch (error) {
   next(error)
}
}

export const verifyAdmin=(req,res,next)=>{
  if(req.user.role!=="admin"){
    return next(createError(403,"Accès réservé aux administrateurs"))
  }
  next();
}