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

// Endpoint GET a la ruta "/views/", donde cuando se consulte, retorne la cantidad de 
// vistas que hayy al mismo tiempo, aumente la variable de las vistas en 1. 
// Y también decir la hora actual.

// EndPoint POST, en la ruta "/math/sum", donde tome de un diccionario los valores
// con llave "val1" y "val2" y los sume. Verificar si son son números, y verificar
// que no sean números pares

// Los EndPoints deben tener buenas prácticas que se han enseñado, como el uso de los
// enrutadores

export default userRouter