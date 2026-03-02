const express = require('express')
const app = express()
app.use(express.json())

app.get('/orders/:id', async (req,res,next)=>{
    try{
        const orders = await db.orders(req.params.id)
        if (!orders){
            const err =new Error("order not fous ")
            err.status=404
            return next(err)
        }
    }catch(err){
        next(err)
    }
})

app.use((err,req,res,next)=>{
    const statusCode = err. status||500;

    res.status(statusCode).json({error:"somethign went wrong"})
})

app.listen(3000)
