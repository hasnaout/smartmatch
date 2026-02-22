import jwt from "jsonwebtoken"

const adminAuth=async(req,res,next)=>{
  try {
    const {token}=req.headers 
    if(!token){
      return res.json({success:false,message:"Pas authorise , essayer une autre fois"})
    }
    const token_decode=jwt.verify(token,process.env.JWT_SECRET);
    if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
      return res.json({success:false,message:"Pas authorise , essayer une autre fois"})
    }
    next()
  }catch(error){
    console.log(error)
    return res.json({success:false,message:error.message})
  }
}

export default adminAuth;