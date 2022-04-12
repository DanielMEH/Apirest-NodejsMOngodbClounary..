import {Router} from "express";

const router = Router();


router.get("/users",(req,res)=>
  res.send("holamundo")
        
  )

router.get("/",(req,res)=>
  res.send("hello word")
  )

export default router;