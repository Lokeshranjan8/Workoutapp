require('dotenv').config();

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello from Node.js');
})

app.listen(process.env.PORT,()=>{
    console.log(' is running on port',process.env.PORT);
})
