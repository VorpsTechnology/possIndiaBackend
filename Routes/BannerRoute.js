import express from  "express"
import { create, edit, remove } from "../Controllers/BannerControllers.js";

const router =express.Router();

router.post("/add",create)
router.delete("/remove",remove)
router.put("/change",edit)





export default router