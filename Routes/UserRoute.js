import  express  from "express";
import authMiddleWare from "../Middleware/authMiddleware.js";
import { address, blockUser, deleteUser, getAllUser, getUser, removeaddress, UnblockUser, updateUser } from "../Controllers/UserController.js";
const router=express.Router();
router.get("/",getAllUser) 
router.get("/:id",getUser)
router.put("/:id", updateUser)
router.delete("/:id",deleteUser)
router.post("/address",address)
router.post("/removeaddress",removeaddress)

router.put("/:id/block" ,blockUser)
router.put("/:id/unblock" ,UnblockUser)
export default router;