import mongoose from 'mongoose';
const {Schema}=mongoose;
const userSchema=new Schema({
  nom:{ type:String ,required},
  prenom:{type:String,required},
  email:{type:String,required,unique:true},
  adresse:{type:String,required},
  telephone:{type:String,required},
  password:{type:String,required},
  role:{type:String,enum:["client","prestataire","admin"],default:"client"},
  date_creation:{type:Date,default:Date.now},
});
const User=mongoose.models.User || mongoose.model("User",userSchema);
/*si model deja existe on l'utilise , sinon le crée */
export default User;