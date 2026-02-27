// let p = new Promise((resolve, reject)=>{
//     let a=1+2
//     if (a==2){
//         resolve('Success')
//     }else {
//         reject("failed")
//     }
// })

// p.then((message)=>{
//     console.log("this is the msg:"+message)
// }).catch((e)=>{
//     console.log(e)
// })


// myPromise= new Promise((resolve, reject)=>{
//     const success =True
//     if (success==True){
//         resolve("true")
//     }else{
//         reject(new Error("Transaction failed"))
//     }
// });




// function getBalance(userid) {
//     setTimeout(() => {
//         new Promise(resolve, reject){
//             if (!user.id)
//                 reject(new Error("no user id"))
//             else
//                 resolve({ userid: userid, amount: 100 })
//         }
//     })
// }

// getWalletBalance("user123")
// .then( wallet=>{
//     console.log(wallet.balance)
// })
// .catch(e=>{
//     console.log(e.error)
// })
// .finally(()=>{
//     console.log("Done")
// })


