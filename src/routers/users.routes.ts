import userController from "@/controllers/user.controller";
import codesMiddlewares from "@/middlewares/codes.middlewares";
import userRolesMiddlewares from "@/middlewares/userRoles.middlewares";
import TaskModel from "@/models/task.model";
import { Router } from "express";

const userRouter = Router()

const CODIGO_DE_BOMBA_NUCLEAR = "3idf8ghndf"

userRouter.get(
    "/", 
    (req, res) => {
        const userId = req.query.userId

        // @ts-ignore
        res.status(200).json("Hola mundo " + userId)
    }
)

userRouter.post(
    "/",
    userController.CreateUser
)

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


export default userRouter