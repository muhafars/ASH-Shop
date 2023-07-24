import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
const app = express();
const port = process.env.PORT || 3001;

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

const view = async function (req, res, next) {
  const id = req.params.id;
  try {
    let product;
    if (id) {
      product = products.find(product => product._id === id);
    } else {
      product = products;
    }
    res.json(product);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    } else {
      next(err);
    }
  }
};

app.get("/api/products", view);
app.get("/api/products/:id", view);
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
