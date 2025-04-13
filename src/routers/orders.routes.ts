import { Router } from "express";

const orderRouter = Router()
           

orderRouter.post(
    "/",
    (req, res)=> {
        return res.status(200).json({
            "message" : "mondongo",
        })
    }
)

orderRouter.get(
    "/",
    (req, res)=>{
        return res.status(200).json({
            "message" : "Pata",
        })
    }
)

orderRouter.put(
    "/",
    (req, res)=> {
        return res.status(200).json({
            "message": "otorrinolaringólogo",
        })
    }
)

orderRouter.delete("/",(req, res)=> {return res.status(200).json({"message": "electroencefalografista"})})
export default orderRouter
