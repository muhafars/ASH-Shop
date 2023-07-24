import express from "express";
import product from "./data/products.js";
import products from "./data/products.js";
const app = express();
const port = 3001;

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
    if (id) {
      const product = products.find(index => index._id === id);
      res.json(product);
    }
    res.json(product);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};
app.get("/api/products", view);
app.get("/api/products/:id", view);
app.listen(port, () => console.log(`Server running on http:localhost:${port}`));
