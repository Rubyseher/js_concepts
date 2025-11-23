let p = new Promise((resolve, reject)=>{
    let a=1+2
    if (a==2){
        resolve('Success')
    }else {
        reject("failed")
    }
})

p.then((message)=>{
    console.log("this is the msg:"+message)
}).catch((e)=>{
    console.log(e)
})