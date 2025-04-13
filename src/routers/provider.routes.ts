import { Router } from "express";

const providerRouter = Router()
           

providerRouter.post(
    "/",
    (req, res)=> {
        return res.status(200).json({
            "message" : "mondongo",
        })
    }
)

providerRouter.get(
    "/",
    (req, res)=>{
        return res.status(200).json({
            "message" : "Pata",
        })
    }
)

providerRouter.put(
    "/",
    (req, res)=> {
        return res.status(200).json({
            "message": "otorrinolaringólogo",
        })
    }
)

providerRouter.delete("/",(req, res)=> {return res.status(200).json({"message": "electroencefalografista"})})
export default providerRouter
