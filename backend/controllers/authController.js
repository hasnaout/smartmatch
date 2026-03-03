import User from "../models/userModel";
export const connexion=async (req,res)=>{

  try {
     const newUser= new User(req.body);

     await newUser.save();
     res.status(201).send("utilisateur crer avec succée");
  } catch (error) {
     res.status(500).send("il y a un probleme")
  }
}
export const inscription=async(req,res)=>{
  
}
export const deconnexion=async(req,res)=>{
  
}