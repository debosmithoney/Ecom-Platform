import { Product } from "../models/product";
import { products } from "../data/mockData";

export class ProductService {
  getAllProducts(): Product[] {
    return products;
  }

  // Type narrowing applied based on search
  getProductByNameOrSKU(query: { name?: string; sku?: string }): Product | null {
    if (query.name) {
      return products.find((product) => product.name === query.name) || null;
    }
    if (query.sku) {
      return products.find((product) => product.sku === query.sku) || null;
    }
    return null;
  }

  purchaseProduct(id: number): Product | null {
    const product = products.find((p) => p.id === id);
    return product || null;
  }
}
