const express =require("express");
const app=express();
app.use(express.json())
const products=require("./routes/productRoute")
app.use("/api/v1",products);    




module.exports=app;


const {addtocart,updatecart}=require("./cartModule");
console.log(addtocart(),updatecart()) //type is common js in package json file 
