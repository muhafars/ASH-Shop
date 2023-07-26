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
const viewDetail = asyncHandler(async function (req, res) {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error(`Resource Not Found`);
  }
});

const productController = { view, viewDetail };
export default productController;
