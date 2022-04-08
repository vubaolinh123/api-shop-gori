import { Router } from 'express';
import { create, list } from '../controllers/detailBill';
const router = Router()

router.get("/detaibill", list)
router.post("/detaibill", create)


export default router;