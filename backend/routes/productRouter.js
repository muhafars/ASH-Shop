import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/productModel.js";

const view = asyncHandler(async function (req, res) {
  const id = req.params.id;
  let product;
  if (id) {
    product = await Product.findById(id);
    res.json(product);
  } else {
    product = await Product.find({});
    res.json(product);
  }
  res.status(404).json({ message: "Product Not Found" });
});

router.get("/products", view);
router.get("/products/:id", view);

export default router;
