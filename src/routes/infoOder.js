import { Router } from 'express';
import { create, list, read, update } from '../controllers/infoOder';
const router = Router()

router.get("/order", list)
router.post("/order", create)
router.get("/order/:id", read);
router.put("/order/:id", update);


export default router;