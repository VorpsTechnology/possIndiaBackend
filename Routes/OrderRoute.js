import express from  "express"
import { adminOrders, adminreturn, all,  cancel,  cancelledOrders,  changestatus,  create, getOne, returnReq} from "../Controllers/OrderController.js";

const router =express.Router();


router.post("/create",create)
router.get("/getone/:id",getOne)
// router.post("/cancel",cancel)
router.post("/all",all)
router.post("/admin/changestatus",changestatus)
router.get("/adminOrders",adminOrders)
router.post("/cancel",cancel)
router.post("/return",returnReq)
router.get("/adminOrders/cancelled",cancelledOrders )
router.get("/adminOrders/return",adminreturn )




export default router 