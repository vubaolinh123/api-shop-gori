import { Router } from 'express'
import { create, read, list } from '../controllers/catePro'

const router = new Router()

router.post("/categoryPros", create);
router.get("/categoryPros", list);
router.get("/categoryPro/:id", read);

export default router