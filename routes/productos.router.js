import {Router} from "express";
const router = Router();
import {
getProducts,
postProducts,
updateProducts,
deleteProducts,
getProduct 
}  from "../controllers/products.controllers.js"
import fileUpload from "express-fileupload"
router.get("/products",getProducts)

router.post("/products",fileUpload({
  useTempFiles:true,
  tempFileDir : "./uploads"
}),postProducts)

router.put("/products/:id",updateProducts)
router.get("/products/:id",getProduct)
router.delete("/products/:id",deleteProducts)

export default router;
