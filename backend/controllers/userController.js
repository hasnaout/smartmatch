import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

const createToken=(id)=>{
  return  jwt.sign({id},process.env.JWT_SECRET)
}
//Route pour User connecxion
const connectUser=async(req,res)=>{
 try{
    const{email,password}=req.body;
    const user=await userModel.findOne({email});

    if(!user){
      return res.json({succes:false,message:"Utilisateur n'existe pas"})
    }
    const exist=await bcrypt.compare(password,user.password);

    if(exist){
      const token =createToken(user._id)
      res.json({succes:true,token})
    }
    else{
      res.json({succes:false,message:"Informations incorrecte"})
    }
 }catch(error){
     console.log(error);
    res.json({succes:false,message:error.message})
 }
}

//Route pour User inscription
const inscrirUser=async(req,res)=>{
 try{
   const {nom,email,password}=req.body;
   //check si user exist deja ou non
   const exists=await userModel.findOne({email});
   if(exists){
    return res.json({succes:false,message:"utilisteur existe déja"});
   }

   //valider email fomat et password strong
   if(!validator.isEmail(email)){
     return res.json({succes:false,message:"Email non valide"});
   }
   if(password.length<8){
     return res.json({succes:false,message:"Mot de passe doit etre superieur a 8 caractères"});
   }

   //hasher password
   const salt=await bcrypt.genSalt(10);
   const hashedpassword=await bcrypt.hash(password,salt)
   const newUser=new userModel ({
    nom ,
    email,
    password:hashedpassword
   })

   const user=await newUser.save()
   const token=createToken(user._id)
   res.json({succes:true,token})
 }catch(error){
    console.log(error);
    res.json({succes:false,message:error.message})
 }

}

//Route pour Admin connecxion
const connectAdmin=async(req,res)=>{
 try{
   const {email,password}=req.body
   
   if(email===process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){
       const token=jwtt.sign(email+passwprd,process.env.JWT_SECRET);
       res.json({succes:true,token})
   }else{
     res.json({succes:false,message:"Informations invalide"})
    }
   } catch(error){
    console.log(error);
    res.json({succes:false,message:error.message})
 }
}

export {connectUser,inscrirUser,connectAdmin};