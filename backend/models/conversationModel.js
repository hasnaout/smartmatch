import mongoose from "mongoose";
const {Schema} =mongoose;
const ConversationSchema=new Schema({
 id:{type:String,required:true,unique:true},
 client8id:{type:String,required:true},
 prestataireId:{type:String,required:true},
 readByClient:{type:Boolean,required:true},
 readByPrestataire:{type:Boolean,required:true},
 lastMessage:{type:String,required:false},
},{
    timestamps:true
});
const Conversation=mongoose.models.Conversation || mongoose.model("Conversation",ConversationSchema);
export default Conversation;