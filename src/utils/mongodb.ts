import mongoose from "mongoose"

const MONGODB_URI = "mongodb+srv://clases-privadas:UU8rwbSwdCltH4l9@cluster0.9xtuu.mongodb.net/clasesPrivadas?retryWrites=true&w=majority&appName=Cluster0"

export const dbConnection = async () => {
    await mongoose.connect(MONGODB_URI).then((r) => {
        console.log("Conectado a la base de datos.")
    }).catch((err) => {
        console.log("Error al conectar con la base de datos.")
    })
}


// Arrow Function