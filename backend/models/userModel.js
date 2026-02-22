import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
  nom:{ type:String ,required:truse},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  role:{type:String,enum:["client","prestataire","admin"],default:"client"},
  date_creation:{type:Date,default:Date.now}
});
const User=mongoose.model("User",userSchema);

export default User;