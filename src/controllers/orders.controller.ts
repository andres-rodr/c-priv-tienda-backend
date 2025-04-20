import OrderModel, { IProductOrder } from "@/models/order.model"
import orderUtils from "@/utils/controllerUtils/order.utils"
import { Request, Response } from "express"
import { ObjectId } from "mongodb"

const CreateOrders = async (req: Request, res: Response)=> {
    try {
        const {
            products, user, orderNumber, paymentMethod, paymentStatus,
        } = req.body
        
        if ( !products || !user || !orderNumber || !paymentMethod || !paymentStatus){
            return res.status(400).json({
                "message" : "Petición mal formulada"
            })
        }

        if (!Array.isArray(products) || typeof user !== "string" || typeof orderNumber !== "string" || typeof paymentMethod !== "string" || typeof paymentStatus !== "string" ){

            return res.status(400).json({"message": "Petición mal formulada."})
            
        }

        const arrFixedProducts : IProductOrder[] = orderUtils.GetFixedProductsFromProductRequest(products)

        console.log(arrFixedProducts)

        const temp = await OrderModel.create({
            products: arrFixedProducts, 
            user,  
            orderNumber, 
            paymentMethod, 
            paymentStatus,
            orderDate: new Date()
        })

        if (!temp){
            return res.status(400).json({
                "message": "No se pudo crear la orden."
            })
        }
        
        return res.status(200).json({
            "message" : "superfrajilisticoespiadiloso",
        })

    } catch (err) {
        console.log("ERROR!", err)

        return res.status(500).json({
            "message": "Fatal error on server."
        })
    }
}

const GetOrders = async (req: Request, res: Response)=> {
    try {

        const temp = await OrderModel.find()

        return res.status(200).json({
            "orders": temp
        })

    } catch (err) {
        console.log("ERROR!", err)

        return res.status(500).json({
            "message": "Fatal error on server."
        })
    }
}

const UpdateOrders = (req: Request, res: Response)=> {
    return res.status(200).json({
        "message": "otorrinolaringólogo",
    })
}

const DeleteOrders = (req: Request, res: Response)=> {
    return res.status(200).json({
        "message": "electroencefalografista"
    })
}

export default {
    CreateOrders,
    GetOrders,
    UpdateOrders,
    DeleteOrders
}

