import mongoose from "mongoose";

const connectDB=async()=>{
  mongoose.connection.on("connected",()=>{
    console.log("MongoDB connecté avec succès");
  })
 
  await mongoose.connect(`${process.env.MONGODB_URL}/SmartMatch`)
}
export default connectDB;