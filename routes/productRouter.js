import express from 'express';
import {createProduct,getProducts} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct)

productRouter.get("/",getProducts)

productRouter.get("/search/:query",searchProducts)

productRouter.get("/:productId",getProductById)

productRouter.delete("/:productId",deleteProduct)



export default productRouter;