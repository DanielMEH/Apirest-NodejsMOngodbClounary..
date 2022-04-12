import {v2 as cloudinary } from "cloudinary"
import { claudinar_Name,
        claudinarySecret,
        cludinaryKey 
       
} from "../config.js"


cloudinary.config({ 
  cloud_name: claudinar_Name,
  api_key: cludinaryKey, 
  api_secret: claudinarySecret,
  secure: true
});
export async function uploadImage(filePath) {
return  await cloudinary.uploader.upload(filePath,{
  folder: "replit"
})
  
}

export async function deleteImage(publicId){

 return  await cloudinary.uploader.destroy(publicId)
  
}