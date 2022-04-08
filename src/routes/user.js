import { Router } from 'express';
import { read } from '../controllers/user';
const router = Router()

// router.get("/user", list)
// router.post("/user", create)
router.get("/user/:id", read);


export default router;