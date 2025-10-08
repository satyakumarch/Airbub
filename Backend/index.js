import express from "express";

let port =8000;


let app=express();

app.get("/",(req,res)=>{
    res.send("welcome to the airbub website")
})

app.listen(port,()=>{
    console.log("server started");
})