import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

const createToken=(id)=>{
  return  jwt.sign({id},)
}
//Route pour User connecxion
const connectUser=async(req,res)=>{
 try{
   
 }catch(error){

 }
}

//Route pour User inscription
const inscrirUser=async(req,res)=>{
 try{
   const {nom,email,password}=req.body;
   //chech si user exist deja ou non
   const exists=await userModel.findOne({email});
   if(exists){
    return res.json({succes:false,message:"utilisteur existe déja"});
   }

   //valider email fomat et password strong
   if(!validator.isEmail(email)){
     return res.json({succes:false,message:"Email non valide"});
   }
   if(password.lenght<8){
     return res.json({succes:false,message:"Mot de passe doit etre superieur a 8 caractères"});
   }

   //hasher password
   const salt=await bcrypt.genSalt(10);
   const hashedpaswword=await bcrypt.hash(password,salt)

   const newUser=new userModel ({
    nom ,
    email,
    password:hashedpaswword
   })

   const user=await newUser.save()

   const token=await newUser
 }catch(error){

 }

}

//Route pour Admin connecxion
const connectAdmin=async(req,res)=>{

}

export {connectUser,inscrirUser,connectAdmin}