import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,    
        required:true,
        minLength:6,
        select:false, //it will not show password when we fetch user details
    },
    listings:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Listing",
    },
    bookings:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Booking", 
    },
},{timestamps:true});

const User=mongoose.model("User",userSchema);
export default User;
