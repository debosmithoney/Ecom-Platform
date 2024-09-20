import { Request, Response } from "express";
import { ProductService } from "../service/productService";

const productService = new ProductService();

export class ProductController {
  getProducts(req: Request, res: Response) {
    const products = productService.getAllProducts();
    res.json(products);
  }

  searchProduct(req: Request, res: Response) {
    const name = req.query.name as string | undefined;
    const sku = req.query.sku as string | undefined;

    const product = productService.getProductByNameOrSKU({ name, sku });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  }

  purchaseProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = productService.purchaseProduct(Number(id));
    if (product) {
      res.json({ message: `Product with ID ${id} purchased successfully` });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  }
}
