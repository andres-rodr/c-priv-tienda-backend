import codesMiddlewares from "@/middlewares/codes.middlewares";
import userRolesMiddlewares from "@/middlewares/userRoles.middlewares";
import TaskModel from "@/models/task.model";
import { Router } from "express";

const userRouter = Router()

const CODIGO_DE_BOMBA_NUCLEAR = "3idf8ghndf"

userRouter.get(
    "/", 
    codesMiddlewares.checkForNuclearBombCode,
    userRolesMiddlewares.checkIfIsAdmin,
    (req, res) => {
        const userId = req.query.userId

        // @ts-ignore
        res.status(200).json("Hola mundo " + userId)
    }
)

userRouter.post("/", codesMiddlewares.checkForNuclearBombCode , (req, res) => {
    console.log(req.body)

    res.status(200).json('Hola Mundo JEJEJEJE ' + req.body.nombre)
})

userRouter.post("/task", async (req, res) => {
    console.log("usuario hizo post a tarea")

    const {
        title,
        description,
        isChecked,
    } = req.body

    const temp = await TaskModel.create({
        title,
        description,
        isChecked
    })

    return res.status(200).json({"message": "Tarea Creada exitosamente"})
})

// ================
// TAREA 1
// Endpoint GET a la ruta "/views/", donde cuando se consulte, retorne la cantidad de 
// vistas que hayy al mismo tiempo, aumente la variable de las vistas en 1. 
// Y también decir la hora actual.



// EndPoint POST, en la ruta "/math/sum", donde tome de un diccionario los valores
// con llave "val1" y "val2" y los sume. Verificar si son son números, y verificar
// que no sean números pares

// Los EndPoints deben tener buenas prácticas que se han enseñado, como el uso de los
// enrutadores

// ====================
// TAREA 2
// Crear un esquema para productos de la tienda
// Categorías de Productos
// Proveedores de la tienda
// Ventas -> Registro de productos, cantidades y precio

// EndPoint para registro del usuario con tantas validaciones como sea posible.

export default userRouter