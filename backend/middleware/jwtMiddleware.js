import jwt from "jsonwebtoken";

export const verifyToken=(req,res,next)=>{
try {
  
  const token =req.cookies.accessToken;
  if(!token){
     return res.status(401).json({
      success:false,
      message:"Vous n'etes pas authentifié"
     });
  }
  const decode=jwt.verify(token,process.JWT_SECRET);
   // On attache l'utilisateur à la requête
  req.user=decode;
  next(); // passe au controller
} catch (error) {
   return res.status(403).json({
    success:false,
    message:"Token invalide"
   });
}
}

export const varifyAdmin=(req,res,next)=>{
  if(req.user.role!=="admin"){
    return res.status(403).json({
      success:false,
      message:"Accès réservé aus administrateurs"
    });
  }
  next();
}