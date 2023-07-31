import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./database/index.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT ? process.env.PORT : 3001;
db();
const app = express();

import productRoutes from "./routes/productRouter.js";
import userRoutes from "./routes/userRouter.js";
// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api", productRoutes, userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
