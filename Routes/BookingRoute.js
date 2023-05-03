import express from  "express"
import { add } from "../Controllers/BookingController.js";

const router =express.Router();

router.post("/add",add)
router.post("/remove")




export default router