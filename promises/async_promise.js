function getUserData(userId) {
  return getWalletBalance(userId)
    .then(wallet => getTransactions(wallet.userId))
    .then(transactions => processPayment(transactions[0]));
}

// async/await version — same logic, reads like synchronous code
async function getUserData(userId){
    try{
    const wallet = await getWalletBalance(userId)
    const transaction =await getTransactions(wallet.userId)
    const result = await processPayment(transactions[0])
    return result;
    }
    catch(error){
        console.error("Transfer failed:", err.message);
        throw err;
    }
}