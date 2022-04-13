import { Router } from 'express';
import { read, list, update, remove, create } from '../controllers/voucher';
const router = Router()

router.get("/voucher", list)
router.post("/voucher", create)
router.put("/voucher/:id", update)
router.delete("/voucher/:id", remove)
router.get("/voucher/read", read);


export default router;