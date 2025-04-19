import { Request, Response } from "express"

const CreateOrders = (req: Request, res: Response)=> {
    return res.status(200).json({
        "message" : "mondongo",
    })
}

const GetOrders = (req: Request, res: Response)=> {
    return res.status(200).json({
        "message": "otorrinolaringólogo",
    })
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

