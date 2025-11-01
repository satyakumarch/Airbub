import User from "../models/user.model.js";
import genToken from "../config/token.js";
import bcrypt from "bcryptjs";

export const signup=async(req,res)=>{
    try{
        let {name,email,password}=req.body
        let exitUser=await User.findOne({email})
        if(exitUser){
            return res.status(400).json({message:"user is a already exit"})
        }
        let hashPassword=await bcrypt.hash(password,10)
        let user=await User.create({name,email,password:hashPassword})
        let token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json(user)
    }catch(error){
         return res.status(500).json({message:`signup error ${error }`})
    }
}

export const login=async(req,res)=>{
    try{
        let {email,password}=req.body
        let user = await User.findOne({email}).select("+password")
        if(!user){
            return res.status(400).json({message:"user is not found"})
        }
    //     console.log("Email:", email);
    //    console.log("Password:", password);
    //    console.log("User password:", user.password);

      let isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"})
        }
        let token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(200).json(user)

    }catch(error){
                 return res.status(500).json({message:`login error ${error }`})
    }
}

export const logout=async(req,res)=>{
    try{
        res.clearCookie("token")
        return res.status(200).json({message:"logout successful"})
    }catch(error){
        return res.status(500).json({message:`logout error ${error }`}) 
    }
}
