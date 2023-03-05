const express=require("express");
const cors = require('cors');
const bolly = require('./controllers/Bollywood');
const holly = require('./controllers/Hollywood')
const fitness= require('./controllers/Fitness')
const technology=require('./controllers/Technology');
const food=require("./controllers/Food")
const app=express();

app.use(cors());
app.use("/", bolly);
app.use("/",holly)
app.use("/",fitness)
app.use("/",technology)
app.use("/",food)

app.get("/",(req,resp)=>{
   resp.send("heeloo")
})

app.listen(4000,()=>{
    console.log("Server started on port 4000")
})