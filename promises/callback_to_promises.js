const userleft = true
const userWatching = false

function watchVid() {
    return new Promise((resolve, reject) =>{
    if (userleft) {
        reject("User left :(")
    } else if (userWatching) {
        reject("user watch cat")
    } else {
        resolve("subscribe")
    }
    })
}

watchVid().then((message) => {
    console.log(message)
}).catch((e) => {
    console.log(e)
})
