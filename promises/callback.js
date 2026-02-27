// The old way — callback hell
// getUser(userId, function(user) {
//   getWallet(user.id, function(wallet) {
//     getTransactions(wallet.id, function(transactions) {
//       processPayment(transactions, function(result) {
//         // By now you're 4 levels deep
//         // Hard to read, hard to debug, hard to handle errors
//         console.log(result);
//       });
//     });
//   });
// });

convert callback to promise
getUser(userid)
    .then(wallet => {
        console.log(wallet.balance)
        return getTransactions(wallet.userid)
    })
    .then(transactiosn => {
        console.log(trnasactions)
        return getPayment(transaction[0])
    })
    .then(result => {
        console.log("Payment done:", result);
    })
    .catch(err => {
        // ONE catch handles errors from ANY step above
        console.error("Something failed:", err.message);
    });