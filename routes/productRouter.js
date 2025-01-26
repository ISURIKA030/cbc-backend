import express from 'express';
import {createProduct,getProducts} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct)

productRouter.get("/",getProducts)

productRouter.get("/search/:query",searchProducts)



export default productRouter;