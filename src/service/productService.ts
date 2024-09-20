import { Product } from '../models/product'; 
import { mockProducts } from '../data/mockData';

export class ProductService {
  getAllProducts(): Product[] {
    return mockProducts;
  }

  getProductByName(name: string): Product | undefined {
    return mockProducts.find(product => product.name.toLowerCase() === name.toLowerCase());
  }

  getProductBySKU(sku: string): Product | undefined {
    return mockProducts.find(product => product.sku === sku);
  }

  purchaseProduct(id: number): string {
    const product = mockProducts.find(p => p.id === id);
    return product ? `Purchased ${product.name} for $${product.price}` : 'Product not found';
  }
}
