import { Router } from "express";

const providerOrderRouter = Router()
           

providerOrderRouter.post(
    "/",
    (req, res)=> {
        return res.status(200).json({
            "message" : "mondongo",
        })
    }
)

providerOrderRouter.get(
    "/",
    (req, res)=>{
        return res.status(200).json({
            "message" : "Pata",
        })
    }
)

providerOrderRouter.put(
    "/",
    (req, res)=> {
        return res.status(200).json({
            "message": "otorrinolaringólogo",
        })
    }
)

providerOrderRouter.delete("/",(req, res)=> {return res.status(200).json({"message": "electroencefalografista"})})
export default providerOrderRouter
