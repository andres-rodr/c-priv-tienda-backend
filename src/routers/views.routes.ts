import { Router } from "express";

const viewsRouter = Router()

// Endpoint GET a la ruta "/views/", donde cuando se consulte, retorne la cantidad de 
// vistas que hay, al mismo tiempo, aumente la variable de las vistas en 1. 
// Y también decir la hora actual.

let count = 0

viewsRouter.get("/", (req, res) => {
    count++;
    return res.status(200).json({
        "message": "Hecho",
        "views": count,
        "time": new Date().toLocaleTimeString()
    })
})

export default viewsRouter