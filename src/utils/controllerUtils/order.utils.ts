import { IProductOrder } from "@/models/order.model"
import { ObjectId } from "mongodb"

const GetFixedProductsFromProductRequest = (products: any) => {

    console.log(products)
    console.log(products.length)
    
    const arrFixedProducts : IProductOrder[] = []

    for (let i = 0; i <= products.length - 1; i++){

        const {
            price, product, quantity,
        } = products[i]

        arrFixedProducts.push({
            price,
            product: new ObjectId(product),
            quantity
        })

    }

    return arrFixedProducts
}

export default {
    GetFixedProductsFromProductRequest
}