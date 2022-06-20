import express from "express";
import { deleteProduct, getAllProduct, getDetailProduct, postProduct, updateProduct } from "../controller/product.js";

const router = express.Router();

router.get('/', getAllProduct);
router.get('/:id', getDetailProduct);
router.post('/register', postProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;