import mongoose from 'mongoose';
const {Schema}=mongoose;
const userSchema=new Schema({
  nom:{ type:String ,required:true},
  prenom:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  adresse:{type:String,required:true},
  telephone:{type:String,required:true},
  password:{type:String,required:true},
  role:{type:String,enum:["client","prestataire","admin"],default:"client"},
  date_creation:{type:Date,default:Date.now},
});
const User=mongoose.models.User || mongoose.model("User",userSchema);
/*si model deja existe on l'utilise , sinon le crée */
export default User;