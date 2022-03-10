import { Router } from 'express';
import { create, deleteOne, getOne, list, update } from '../controllers/product';
import checkAuth from '../middlewares/checkAuth';
const router = Router()

router.get("/products", checkAuth, list)
router.post("/products", checkAuth, create)
router.get("/products/:id", checkAuth, getOne)
router.delete("/products/:id", checkAuth, deleteOne)
router.put("/products/:id", checkAuth, update)


export default router;