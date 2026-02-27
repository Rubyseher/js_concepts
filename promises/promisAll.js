// async function getashboardData(userid) {
//     const [wallet, transactoons] = await Promise.all([
//         getWalletBalance(userId),   // takes 1s
//         getTransactions(userId)
//     ])

//     return{wallet,transaction};
// }
// If either rejects, the whole thing rejects immediately. Use when you need all results and a failure means you can't proceed.

// async function getDashbaordData2(userID) {
//     const [walletresult, transaction] = await Promise.allSettled([
//         getWalletBalance(userId),   // takes 1s
//         getTransactions(userId)
//     ])
//     return { 
//         wallet: walletresult.status==="fuilfilled"? walletresult.value:null , 
//         transaction 
//     };
// }
// Never rejects — gives you the outcome of each Promise individually. Use when you want to show partial data rather than crash everything.