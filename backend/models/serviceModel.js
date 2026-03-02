import mongoose from "mongoose";

const {Schema} =mongoose;
const ServiceSchema=new Schema({
  userid:{type:String,required},
  title:{type:String,required},
  totalStars:{type:Number,required},
  starNumber:{type:Number,required},
  cat:{type:String,required},
  prix:{type:Number,required},
})