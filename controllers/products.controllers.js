import Product from "../models/product.module.js"
import {uploadImage, deleteImage} from "../utils/cloudinary.js"
import fs from "fs-extra"


export  const getProducts = async (req,res)=>{
 try {
   const products = await Product.find()
  res.json(products) 
 } catch (error) {
   res.status(500).json({
     massage:error.message
   })  
   
 }
}
  
export  const postProducts = async (req,res)=>{

  try {
    const  {name, description, price } = req.body;

 console.log(req.files)
 const product = new Product({
    name,
    description,
    price 
  })
    if(req.files?.image){

      const resultFiles = await uploadImage(req.files.image.tempFilePath)
  product.image ={
    public_id: resultFiles.public_id,
    secure_url: resultFiles.secure_url
  }

    await  fs.unlink(req.files.image.tempFilePath)
    }
    
  await product.save()
  res.json(product)
  } catch (error) {
     res.status(500).json({
     massage:error.message
   })
  }
}



export  const deleteProducts = async (req,res)=> {

try {
    console.log(req.params.id)

 const product=  await Product.findByIdAndDelete(req.params.id)
  
    if(!product) return res.status(404).json({
     message:"Error este producto no existe"
  })

 if(product.image?.public_id){

  await deleteImage(product.image.public_id)
 }

  
   return  res.json(product)
} catch (error) {
    res.status(500).json({
     massage:error.message
   })
}
  
}

export  const getProduct = async (req,res)=> {
try {
  
 const product=  await Product.findById(req.params.id)
   return  res.json(product)
  
} catch (error) {
     res.status(500).json({
     massage:error.message
   })
  
}
}

export  const updateProducts = async (req,res)=> {
try {
  
  const {id} = req.params;
 const productUpdate =  await Product.findByIdAndUpdate(id, req.body,{
   new: true
 })
  return res.json(productUpdate)
} catch (error) {
  res.status(500).json({

    message:error.message
  })
  
}
  
}




        
