import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./database/index.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT ? process.env.PORT : 3001;
db();
const app = express();

import productRoutes from "./routes/productRouter.js";

app.get("/", async function (req, res, next) {
  try {
    res.send("Hello from server");
  } catch (err) {
    if (err && err.name === "ValidationError") {
      res.json({
        error: 1,
        message: err.message,
        fields: err.error,
      });
    }
  }
});

app.use("/api", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
