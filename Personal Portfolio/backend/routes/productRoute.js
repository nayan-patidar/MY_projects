const express =require("express");
const {getAllProducts}=require("../controllers/productcontrollers");
const router=express.Router();
router.route("/products").get(getAllProducts);

console.log("wkhdfsja;kdfs")
module.exports=router;  