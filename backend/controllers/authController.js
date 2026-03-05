import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import createError from "../utils/createError.js"

const createToken=(id,role)=>{
    return jwt.sign({id,role},process.env.JWT_SECRET,{expiresIn:"7d"});
     };
export const inscription=async(req,res,next)=>{
  try {
    const {nom,prenom,email,adresse,telephone,password}=req.body;
    if(!nom||!prenom||!email||!adresse||!telephone||!password){
      return  next(createError(400,"Tous les champs sont obligatoires"));
    }
    const existeUser=await User.findOne({email});
    if(existeUser){
      return next(createError(400,"Utilisateur existe d'éja avec cet email"));
    }
    if(!validator.isEmail(email)){
      return next(createError(400,"Email non valide"));
    }
    if(!validator.isMobilePhone(telephone,"any")){
      return next(createError(400,"Télephone invalide"));
    }
    if(!validator.isStrongPassword(password)){
      return next(createError(400,"Mot de passe trop faible"));
    }
    const hash=await bcrypt.hash(password,11)
     const newUser= await User.create({
       nom,
       prenom,
       email,
       adresse,
       telephone,
      password:hash,
     });
     const token=createToken(newUser._id,newUser.role);
      res.cookie("accessToken", token, {
      httpOnly:true,
      secure:false,
      sameSite: "strict"
    });
    const { password: _, ...infos } =newUser._doc;
     res.status(201).json({
      success: true,
      message: "Utilisateur créé avec succès",
      user: infos});
  } catch (error) {
     next(error);
  }
}

export const connexion=async (req,res,next)=>{
 try {
  const {email,password}=req.body;
  if(!email || !password){
    return next(createError(400,"Tous les champs sont obligatoires"))
  }
  const user=await User.findOne({email});
  if(!user){
    return next(createError(404,"Utilisateur n'existe pas"));
  }
  const isCorrect=await bcrypt.compare(password,user.password);
  if(!isCorrect){
      return next(createError(400,"Mot de passe ou Email incorrect"))
  }
  const token=createToken(user._id,user.role);
  const {password: _,...infos}=user._doc;
  res.cookie("accessToken",token,{
    httpOnly:true,
    secure:false,
    sameSite:"strict"
  })
  .status(200)
  .json({
  success: true,
  user: infos
});
 } catch (error) {
   next(error);
 }
}
export const deconnexion=async(req,res,next)=>{
  
}