const express = require('express')
const app = express()
app.use(express.json())

app.post('/transfer', async(req,res,next)=>{
    const {from_acc, to_acc,  amount} =req.body
    
})