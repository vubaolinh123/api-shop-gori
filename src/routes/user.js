import { Router } from 'express';
import { read, list, update, remove } from '../controllers/user';
const router = Router()

router.get("/user", list)
router.put("/user/:id", update)
router.delete("/user/:id", remove)
router.get("/user/:id", read);


export default router;