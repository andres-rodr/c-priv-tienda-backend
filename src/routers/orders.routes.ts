import ordersController from "@/controllers/orders.controller";
import { Router } from "express";

const orderRouter = Router()
           

orderRouter.post(
    "/",
    ordersController.CreateOrders
)

orderRouter.get(
    "/",
   ordersController.GetOrders
)

orderRouter.put(
    "/",
    ordersController.UpdateOrders
)

orderRouter.delete(
    "/",
    ordersController.DeleteOrders
)
export default orderRouter
