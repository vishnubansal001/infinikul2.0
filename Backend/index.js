const express=require('express');
const app=express();
const db=require('./db');
const cors=require('cors')


db();

app.use(cors());
app.use(express.json());
// app.use("/api",require('./Routes/CreateUser'));



app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("listening at port")
})