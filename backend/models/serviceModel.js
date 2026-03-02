import mongoose from "mongoose";

const {Schema} =mongoose;
const ServiceSchema=new Schema({
  userid:{type:String,required:true},
  titre:{type:String,required:true},
  desc:{type:String,required:true},
  totalStars:{type:Number,default:0},
  starNumber:{type:Number,required:true},
  categorie:{type:String,required:true},
  prix:{type:Number,required:true},
  cover:{type:String,required:true},
  images:{type:[String],required:false},
  shortTitre:{type:String,required:true},
  shortDesc:{type:String,required:true},
  date_pub:{type:Number,required:true},
  revisions:{type:Number,required:true},
  features:{type:[String],required:false},
},{
    timestamps:true
});
const Service=mongoose.models.Service || mongoose.model("Service",ServiceSchema);
export default Service;