import { Router } from 'express';
import { ProductController } from '../controllers/productController';

const router = Router();
const productController = new ProductController();

router.get('/products', productController.getProducts);
router.get('/products/search', productController.searchProduct);
router.post('/products/purchase/:id', productController.purchaseProduct);

export default router;
