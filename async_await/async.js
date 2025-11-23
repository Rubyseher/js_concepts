
// makeRequest("Google".then(response =>{
//     console.log("response reiceved")
//     return processRequest(response)
// }).then(ProcessedResponse =>{
//     console.log(ProcessedResponse)
// }).catch(e=>{
//     console.log(e);
// })
// )

async function doWork() {
    try {
        const response = await makeRequest("Google")
        console.log("response recieved");

        const result = await processRequest(response)
    } catch (e) {
        console.log(e);
    }
}

doWork()