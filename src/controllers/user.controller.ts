import UserModel from "@/models/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt"

const CreateUser = async (req: Request, res: Response) => {
    try {
    const {
        name, email, password, phoneNumber, document, birthDay, address, gender
    } = req.body   

    console.log(name, email, password, phoneNumber, document, birthDay, address, gender)

    if (!name || !email || !password || !phoneNumber || !document || !birthDay || !address || !gender ){
        return res.status(400).json({
            "message" : "Peticion Mal Formulada"
        })
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string" || typeof phoneNumber !== "string" || typeof document !== "number" || typeof birthDay !== "string" || typeof address !== "string" || typeof gender !== "string"){
        return res.status(400).json({
            "message" : "Peticion Mal Formulada"
        }) 
    }
    
    const temp = await UserModel.create({
        name, 
        email, 
        password: await bcrypt.hash(password, 10), 
        phoneNumber, 
        document, 
        birthDay, 
        address, 
        gender,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    if (!temp){
        return res.status(400).json({
        "message" : "No se pudo crear el usurio"
        })
    }
    
    return res.status(200).json({
        "message" : "Esternocleidomastoiodeo"
    })

    }catch(err) {
        console.log("ERROR!", err)
        
        return res.status(500).json({
            "message": "Fatal error on server."
        })
    }
}

export default {
    CreateUser,
    
}