const mongoose=require("mongoose")
const connectdatabase= ()=>{
    mongoose.connect(process.env.DB_URI).then(
    (data)=>{
console.log(`database connected:${data.connection.host}`);
    }
).catch((err)=>{
    console.log(err);
})
}
module.exports=connectdatabase;