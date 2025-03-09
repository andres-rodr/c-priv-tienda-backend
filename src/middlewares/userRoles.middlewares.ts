import { NextFunction, Request, Response } from "express";

const checkIfIsAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.role != "ADMIN"){
        console.log("NO ES ADMIN")
        return res.status(401).json({'message': "No eres admin"})
    }
    
    console.log("SIII ES ADMINISTRADOR")
    next()
}

export default {
    checkIfIsAdmin
}