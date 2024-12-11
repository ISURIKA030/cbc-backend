import Product  from "../models/product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req,res){

  if(!isAdmin(req)){
    res.json({
      message: "please login as a administrator to add products"
    })

    return
  }

  const newProductData = req.body

  const product = new product(newProductData)

  product.save().then(()=>{
    res.json({
      message: "product created"
    })
  }).catch((error)=>{
    res.json({
      message : error
    })
  })
}