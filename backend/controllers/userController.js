import User from "../models/userModel.js";
import createError from "../utils/createError.js"
export const deleteUser=async (req,res,next)=>{
 try {
  if(req.user.id!==req.params.id && req.user.role !=="admin"){
    return next(createError(403,"Accès refusé"))
  }

  const user=await User.findByIdAndDelete(req.params.id)
  if(!user){
    return next(createError(404,"Utilisateur introuvable"))
  }

  res.clearCookie("accessToken");
  res.status(200).json({
    success:true,
    message:"Compte supprimé avec succés"
  });
 } catch (error) {
    next(error)
 }
};