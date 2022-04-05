import { Router } from 'express'
import { create, read, list, remove, update } from '../controllers/catePro'

const router = new Router()

router.post("/categoryPro", create);
router.get("/categoryPros", list);
router.get("/categoryPro/:id", read);
router.delete("/categoryPro/:id", remove);
router.put("/categoryPro/:id", update);

export default router