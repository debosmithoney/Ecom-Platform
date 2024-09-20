import { Request, Response } from 'express';
import { ProductService } from '../service/productService'; 

const productService = new ProductService();

export class ProductController {
  getProducts(req: Request, res: Response) {
    const products = productService.getAllProducts();
    res.json(products);
  }

  searchProduct(req: Request, res: Response) {
    const { name, sku } = req.query;
    let product;
    
    if (name) {
      product = productService.getProductByName(name as string);
    } else if (sku) {
      product = productService.getProductBySKU(sku as string);
    }

    res.json(product || 'Product not found');
  }

  purchaseProduct(req: Request, res: Response) {
    const { id } = req.params;
    const message = productService.purchaseProduct(Number(id));
    res.json(message);
  }
}
