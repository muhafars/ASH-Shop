import express from "express";
const router = express.Router();
import productController from "../controllers/productController.js";

router.get("/products", productController.view);
router.get("/products/:id", productController.viewDetail);

export default router;
