import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const createToken=(id,role)=>{
    return jwt.sign({id,role},process.env.JWT_SECRET,{expiresIn:"7d"});
     };
export const inscription=async(req,res)=>{
  try {
    const {nom,prenom,email,adresse,telephone,password}=req.body;
    if(!nom||!prenom||!email||!adresse||!telephone||!password){
      return res.status(400).json({success:false,message:"Tous les champs sont obligatoires"});
    }
    const existeUser=await User.findOne({email});
    if(existeUser){
      return res.status(400).json({
        success:false,message:"Utilisateur existe d'éja avec cet email"});
    }
    if(!validator.isEmail(email)){
      return res.status(400).json({
        success:false,message:"Email non valide"
      });
    }
    if(!validator.isMobilePhone(telephone,"any")){
      return res.status(400).json({
        success:false,message:"Télephone invalide"
      });
    }
    if(!validator.isStrongPassword(password)){
      return res.status(400).json({
        success:false,message:"Mot de passe trop faible"
      });
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
     res.status(500).json({ success: false,message: "Erreur serveur"});
  }
}

export const connexion=async (req,res)=>{
 try {
  const {email,password}=req.body;
  const user=await User.findOne({email});
  if(!user){
     return res.status(404).json({
        success: false,
        message: "Utilisateur n'existe pas"
      });
    }
    if(!email || !password){
      return res.status(400).json({
      success:false,
      message:"Tous les champs sont obligatoires"
    });
}
  const isCorrect=await bcrypt.compare(password,user.password);
  if(!isCorrect){
      return res.status(400).json({
        success: false,
        message: "Mot de passe ou Email incorrect"
      });
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
   res.status(500).json({
      success: false,
      message: error.message
    });
 }
}
export const deconnexion=async(req,res)=>{
  
}