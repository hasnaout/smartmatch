import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
const createToken=(id)=>{
  return  jwt.sign({id},process.env.JWT_SECRET)
}

export const deleteUser=async (req,res)=>{

  const user=await User.findById(req.params.id)
  const token=req.cookies.accessToken;
  if(!token) return res.status(401).send("vous etes pas authentifier");
  jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
     if(!payload.id===user._id){
      return res.status(403).send("Vous pouvez seuelemnt supprimer votre compte")
     }
  })
  await User.findBYIdandDelete(req.params.id);
  res.status(200).send("supprimer avec succées")
}