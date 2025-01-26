import express from 'express';
import { createOrder, getOrders, getQuote, updateOrder } from '../controllers/OrderController.js';

const orderRouter = express.Router();

orderRouter.post("/", createOrder)

orderRouter.get("/", getOrders)

orderRouter.post("/quote",getQuote)

orderRouter.put("/:orderId",updateOrder)

export default orderRouter;