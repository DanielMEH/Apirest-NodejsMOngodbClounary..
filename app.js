import express from"express";
import morgan from"morgan";
import indexRoutes from "./routes/index.routes.js"
import productsIndexRouter from "./routes/productos.router.js"
import cors from "cors"

const app = express();


app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use(indexRoutes)
app.use(productsIndexRouter)

export default app;