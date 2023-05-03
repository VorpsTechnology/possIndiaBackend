import express from  "express"
import { addBulkProduct, addProduct, addVarient, allProducts, deleteProduct, editProduct, editfield, filterByBrandCategory, filterByMinToMax, filterByPetCategory, filterByPriceRange, filterByTypeCategory, filtering, getProduct, search } from "../Controllers/ProductController.js";


const router =express.Router();


router.post("/add",addProduct)
router.put("/edit",editProduct)
router.delete("/:id",deleteProduct)
router.post("/getproducts",allProducts)
router.post("/addbulk",addBulkProduct)
router.post("/change",editfield)
router.get("/all",filtering )
router.post("/typeCatagory",filterByTypeCategory)
router.post("/petCategory",filterByPetCategory)
router.post("/brandCategory",filterByBrandCategory)
router.post("/pricerange",filterByPriceRange)
router.post("/minTomax",filterByMinToMax)
router.post("/search",search)

router.get("/:id",getProduct)
router.post("/addvarient",addVarient)
router.delete("/:id",deleteProduct)
router.get("/category",filtering)




export default router