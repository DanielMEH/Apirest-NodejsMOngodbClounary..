import mongoose from "mongoose"
import {mongodb_URL} from "../config.js"


export async function connectDB(){

try {
  await  mongoose.connect(mongodb_URL)
  console.log("estas conectado en amongoose")
} catch (error) {
  console.log(error)
  
}
}