function once(fn(...args)){
    let called=false
    let result

    if(called==false){
        caled=true
        result = fn(...args)
    }

    return result
}

const initialize = once(()=>{
    console.log(hi)
})