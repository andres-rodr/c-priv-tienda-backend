import productsController from "@/controllers/products.controller";
import { Router } from "express";

const productRouter = Router()

productRouter.post(
    "/",
    productsController.CreateProduct
)

productRouter.get(
    "/",
    productsController.GetProduct
)

productRouter.put(
    "/",
    productsController.UpdateProducts
)

productRouter.delete(
    "/", 
    productsController.DeleteProduts
)

export default productRouter