const rec1 = new Promise (resolve, reject)=>{
    resolve("vid 1")
}
const rec2 = new Promise (resolve, reject)=>{
    resolve("vid 2")
}
const rec3 = new Promise (resolve, reject)=>{
    resolve("vid 3")
}

Promise.all([rec1,rec2,rec3]).then((m)=>)