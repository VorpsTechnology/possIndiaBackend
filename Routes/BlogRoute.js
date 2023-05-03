import express from  "express"
import { create, getOne, getall } from "../Controllers/BlogController.js";


const router =express.Router();

router.post("/add" ,create)
router.delete("/remove")
router.get("/getone/:id", getOne)
router.get("/get",getall)





export default router