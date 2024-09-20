import express from "express";
import { ProductController } from "../controllers/productController";

const router = express.Router();
const productController = new ProductController();

// Define product-related routes
router.get("/products", productController.getProducts);
router.get("/products/search", productController.searchProduct);
router.post("/products/purchase/:id", productController.purchaseProduct);

export default router;
