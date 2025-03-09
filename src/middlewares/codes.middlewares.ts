import { NextFunction, Request, Response } from "express";

const CODIGO_DE_BOMBA_NUCLEAR = "32f4"

const checkForNuclearBombCode = (req: Request, res: Response, next: NextFunction) => {
    console.log("Codigo de Bomba Nuclear", req.query.nuclearBombCode)

    // SIEMPRE FINALIZACIÓN

    if (req.query.nuclearBombCode != CODIGO_DE_BOMBA_NUCLEAR){
        console.log("Codigo de bomba incorrecto.")

        // 1. RETORNAR UN ERROR O UNA RESPUESTA
        return res.status(400).json({"message": "Codigo incorrecto"})
    }
    
    // 2. PASAR AL SIGUIENTE PASO
    next()
}

export default {
    checkForNuclearBombCode
}