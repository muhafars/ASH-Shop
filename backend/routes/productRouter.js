import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/productModel.js";

const view = asyncHandler(async function (req, res) {
  const product = await Product.find({});
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error(`Resource Not Found`);
  }
});
const detailView = asyncHandler(async function (req, res) {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error(`Resource Not Found`);
  }
});
router.get("/products", view);
router.get("/products/:id", detailView);

export default router;
