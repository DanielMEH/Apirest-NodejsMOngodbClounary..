
import app from  "./app.js"
import express from"express"
import morgan from"morgan"
import {connectDB} from "./utils/moongose.js"
async function main() {
  
 await connectDB()

app.listen(3000)
console.log("estas conectado en el puerto",3000)
}
main()