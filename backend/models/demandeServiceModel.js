import mongoose from "mongoose";
const {Schema} =mongoose;
const DemandeSchema=new Schema({
  serviceId:{type:String,required:true},
  titre:{type:String,required:true},
  prix:{type:Number,required:true},
  clientId:{type:String,required:true},
  prestataireId:{type:String,required:true},
  estComplet:{type:Boolean,default:false},
  payment_intent:{type:String,required:true},
},{
    timestamps:true
});
const Demande=mongoose.models.Demande || mongoose.model("Demande",DemandeSchema);
export default Demande;