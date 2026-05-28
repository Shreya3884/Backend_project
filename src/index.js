// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";

// connectDB()

// import dotenv from "dotenv";
// import connectDB from "./db/index.js";
// dotenv.config({
//     path:'./env'
// })
// connectDB()


// // /*import express from "express";
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.envMONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error:",error);
//             throw error
//         })
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//       })
//     }catch(error){
//         console.log("Error", error)
//         throw error
//     }
// })()*/
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
.then(()=>{
  app.listen(process.env.PORT|| 8000,()=>{
    console.log(`Server is running on port :${process.envPORT}`);
  })
})
.catch((error)=>{
  console.log("MongoDB connection failed",error)
})
