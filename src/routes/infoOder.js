import { Router } from 'express';
import { create, list, read } from '../controllers/infoOder';
const router = Router()

router.get("/order", list)
router.post("/order", create)
router.get("/order/:id", read);


export default router;