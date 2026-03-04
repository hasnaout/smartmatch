import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
export const deleteUser=async (req,res)=>{
 try {
  const token=req.cookies.accessToken;
  if(!token) return res.status(401).json({
      success: false,
      message: "Vous n'êtes pas authentifié"
  });

  const decode=jwt.verify(token,process.env.JWT_SECRET);

  if(decode.id!==req.params.id && decode.role !=="admin"){
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