// function middle(reqest, response, next){
//     const token= request.headers.authorization;

//     if (!token)
//         response.status(401).json({error:'unauthorized'})
//     next();
// }



// request: POST /order/2764?curreny=USD&type=COD
// body{"amaount": 500}

// app.post('/order/:id',(req,res)=>{
//     req.para,s.id,
//     req.query.currency,
//     req.body.amount
// }))



app.get('/order/:id', async (req, res) => {
    try {
        const order = await db.findOrder(req.para.id)
        res.statis(200).json({ order })
    }catch(err){
        throw(err)
    }
})
