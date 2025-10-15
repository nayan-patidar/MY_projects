const app = require("./app");

const dotenv = require("dotenv");
const connectdatabase=require("./config/database")

//config
dotenv.config({ path: "backend/config/config.env" });

// connect database
connectdatabase();

app.get('/news',(req,res)=>{
  res.send({status:1,msg:"welcome the zyx newsss"})
  
})
  app.get('/nayan', (req,res)=>{
    res.send({status:1,msg:"hello nayan patidar"})
  
})

app.listen(process.env.PORT, () => {
  console.log(`The system is working on http://localhost:${process.env.PORT}`);
});
// app.listen("9000")


console.log("workinggggggggggggggggggggggggg")