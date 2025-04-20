import express, { Express } from "express";
import userRouter from "./routers/users.routes";
import { dbConnection } from "./utils/mongodb";
import viewsRouter from "./routers/views.routes";
import productRouter from "./routers/products.routes";
import providerRouter from "./routers/provider.routes";
import orderRouter from "./routers/orders.routes";
import providerOrderRouter from "./routers/providerOrders.routes";

// Creación de El servidor
const app: Express = express()
app.use(express.json());

dbConnection()

// Creación del Enrutado
app.use("/users", userRouter)
app.use("/views", viewsRouter)
app.use("/products", productRouter)
app.use("/providers", providerRouter)
app.use("/orders", orderRouter)
app.use("/providerOrders", providerOrderRouter)

const PORT =  3000;

app.listen(PORT, () => {
  console.log(`Servidor encendido en http://localhost:${PORT}`);
});
