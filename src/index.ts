import express, { Express } from "express";
import userRouter from "./routers/users.routes";

// Creación de El servidor
const app: Express = express()
app.use(express.json());

// Creación del Enrutado
app.use("/user", userRouter)

// Poner a escuchar al servidor
app.listen(3000, () => {
    console.log("API encendida en puerto 3000")
})