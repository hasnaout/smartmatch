import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const inscription=async(req,res)=>{
  try {
    const has=bcrypt.hashSync(req.body.password,5)
     const newUser= new User({
      password:hash,
      ...req.body, 
     });

     await newUser.save();
     res.status(201).send("utilisateur crer avec succée");
  } catch (error) {
     res.status(500).send("il y a un probleme")
  }
}
export const connexion=async (req,res)=>{
 try {
  const user=await User.findOne({email:req.body.email})
  if(!user) return res.status(404).send("user n'existe pas")

  const isCorrect=bcrypt.compareSync(req.body.password,user.password);
  if(!isCorrect) return res.status(400).send("mot de passe incorrect");

  const {password,...infos}=user._doc
  res.status(200).send(infos)
 } catch (error) {
   res.status(500).send("il y a un probleme")
 }
}
export const deconnexion=async(req,res)=>{
  
}