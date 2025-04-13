import { Router } from "express";

const productRouter = Router()

productRouter.post(
    "/",
    (req, res)=> {
        try {

            const {
                price, stock , name, description, category, photos, line, SKU, createdAt, updatedAt, enabled
            } = req.body
            
            if (!price || !stock || !name || !description || !category || !photos || !line || !SKU || !createdAt || !updatedAt || !enabled){
                return res.status(400).json({"message": "Petición mal formulada."})
            }

            if (typeof price !== "number" || typeof stock !== "number" || name !== "string" || description !== "string" || category !== "string" || line !== "string" || typeof enabled !== "boolean" || SKU !== "string"){
                return res.status(400).json({"message": "Petición mal formulada."})
            }

            if (price < 0 || stock < 0){
                return res.status(400).json({"message": "Petición mal formulada."}) 
            }


            
            if (photos && !Array.isArray(photos)){
                return res.status(400).json({"message": "Petición mal formulada."})
            }


            if (createdAt && typeof createdAt !== "string"){
                return res.status(400).json({"message": "Petición mal formulada."})
            }

            if (updatedAt && typeof updatedAt !== "string"){
                return res.status(400).json({"message": "Petición mal formulada."})
            }

            if (enabled && typeof enabled !== "boolean"){
                return res.status(400).json({"message": "Petición mal formulada."})
            }

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
)

productRouter.get(
    "/",
    (req, res)=>{
        return res.status(200).json({
            "message" : "Pata",
        })
    }
)

productRouter.put(
    "/",
    (req, res)=> {
        return res.status(200).json({
            "message": "otorrinolaringólogo",
        })
    }
)

productRouter.delete("/",(req, res)=> {return res.status(200).json({"message": "electroencefalografista"})})
export default productRouter
