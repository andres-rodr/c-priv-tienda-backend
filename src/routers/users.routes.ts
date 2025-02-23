import { Router } from "express";

const userRouter = Router()

const CODIGO_DE_BOMBA_NUCLEAR = "3idf8ghndf"

userRouter.get("/", (req, res) => {
    const userId = req.query.userId

    // @ts-ignore
    res.status(200).json("Hola mundo " + (parseInt(userId) + parseInt(userId)))
})

userRouter.post("/", (req, res) => {
    console.log(req.body)

    res.status(200).json('Hola Mundo JEJEJEJE ' + req.body.nombre)
})

export default userRouter