import ProductModel from "@/models/product.model"
import { Request, Response } from "express"

// Camel Case -> Pascal Case
const CreateProduct = async (req: Request, res: Response) => {
    try {

        const {
            price, stock , name, description, category, photos, line, SKU, enabled
        } = req.body

        console.log(price, stock , name, description, category, photos, line, SKU, enabled)
        
        if (!price || !stock || !name || !description || !category || !photos || !line || !SKU || !enabled){
            return res.status(400).json({"message": "Petición mal formulada."})
        }

        if (typeof price !== "number" || typeof stock !== "number" || typeof name !== "string" || typeof description !== "string" || typeof category !== "string" || typeof line !== "string" || typeof enabled !== "boolean" || typeof SKU !== "string"){
            console.log("Hubo un errro en los tipos")
            return res.status(400).json({"message": "Petición mal formulada."})
        }

        if (price < 0 || stock < 0){
            return res.status(400).json({"message": "Petición mal formulada."}) 
        }
        
        if (photos && !Array.isArray(photos)){
            return res.status(400).json({"message": "Petición mal formulada."})
        }

        if (enabled && typeof enabled !== "boolean"){
            return res.status(400).json({"message": "Petición mal formulada."})
        }

        const temp = await ProductModel.create({
            name,
            description,
            photos,
            category,
            enabled,
            line,
            price,
            SKU,
            stock,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        return res.status(200).json({
            "message" : "mondongo",
        })

        
    } catch (err) {
        return res.status(500).json({
            "message": "Error interno del servidor",
            "error": err,
        })
    }
}

const GetProduct = (req: Request, res: Response)=>{
    return res.status(200).json({
        "message" : "Pata",
    })
}

const UpdateProducts = (req: Request, res: Response)=> {
    return res.status(200).json({
        "message": "otorrinolaringólogo",
    })
}

const DeleteProduts = (req: Request, res: Response)=> {
    return res.status(200).json({
        "message": "electroencefalografista"
    })
}


export default {
    CreateProduct,
    GetProduct,
    UpdateProducts,
    DeleteProduts,
}