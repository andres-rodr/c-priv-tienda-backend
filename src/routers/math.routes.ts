import { Router } from "express";


const mathRouter = Router()

// EndPoint POST, en la ruta "/math/sum", donde tome de un diccionario los valores
// con llave "val1" y "val2" y los sume. Verificar si son son números, y verificar
// que no sean números pares
mathRouter.post("/sum", (req, res) => {

    // const val1 = req.body.val1
    // const val2 = req.body.val2
    const {
        val1,
        val2
    } = req.body

    if (typeof val1 !== "number" || typeof val2 !== "number"){
        return res.status(400).json({'message': "Uno de los valores no es número"})
    }

    // Si cualquiera de los dos numeros val1 o val2 es par, va a entrar en la condición
    if (val1 % 2 === 0 || val2 % 2 === 0){
        return res.status(400).json({"message": "los valores son pares"})
    }

    return res.status(200).json(val1 + val2)
})

export default mathRouter