import mongoose from "mongoose"

const productSchema = 
mongoose.Schema({

name:{
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  description:{

    type: String,
    trim: true,
  },
  price: {
    type: Number,
    default: 0
  },
  image: {
    public_id: String,
    secure_url: String
    
  }
},
  {
    timestamps:true
  
  
})

export default mongoose.model("product",productSchema)