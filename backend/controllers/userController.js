import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
export const deleteUser=async (req,res)=>{
 try {
  if(req.user.id!==req.params.id && req.user.role !=="admin"){
    return res.status(403).json({
      success:false,
      message:"Accès refusé"
    });
  }

  const user=await User.findByIdAndDelete(req.params.id)

  if(!user){
    return res.status(404).json({
      success:false,
      message:"Utilisateur introuvable"
    });
  }

  res.clearCookie("accessToken");

  res.status(200).json({
    success:true,
    message:"Compte supprimé avec succés"
  });
  
 } catch (error) {
    res.status(500).json({
      success:false,
      message:"Erreur serveur"
    });
 }
};