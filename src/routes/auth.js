import { Router } from 'express';
import { login, register, list } from "../controllers/auth"
const router = Router()

router.post("/login", login)
router.post("/register", register)
router.get("/users", list)


export default router;