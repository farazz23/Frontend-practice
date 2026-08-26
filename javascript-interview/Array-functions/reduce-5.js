//! You're working on an admin dashboard. The API returns:

const transactions = [
  {
    id: "TXN-101",
    userId: 501,
    status: "success",
    amount: 2500
  },
  {
    id: "TXN-102",
    userId: 502,
    status: "failed",
    amount: 1500
  },
  {
    id: "TXN-103",
    userId: 501,
    status: "success",
    amount: 3500
  },
  {
    id: "TXN-104",
    userId: 503,
    status: "success",
    amount: 1200
  },
  {
    id: "TXN-105",
    userId: 501,
    status: "failed",
    amount: 800
  },
  {
    id: "TXN-106",
    userId: 502,
    status: "success",
    amount: 4200
  }
];

//* Expected result:

// [
//   {
//     transactionId: "TXN-101",
//     userId: 501,
//     amount: 2500
//   },
//   {
//     transactionId: "TXN-103",
//     userId: 501,
//     amount: 3500
//   },
//   {
//     transactionId: "TXN-104",
//     userId: 503,
//     amount: 1200
//   },
//   {
//     transactionId: "TXN-106",
//     userId: 502,
//     amount: 4200
//   }
// ]

//TODO:  Implement:
//? using filter() + reduce() function:
// function getSuccessfulTransactions(transactions) {
//   return transactions
//     .filter((trans) => trans.status === "success")
//     .reduce((succTrans, curTrans) => {
//       succTrans.push({
//         transactionId: curTrans.id,
//         userId: curTrans.userId,
//         amount: curTrans.amount
//       })
//       return succTrans
//     }, [])
// }

//? using filter() + map() function :
// function getSuccessfulTransactions(transactions) {
//   return transactions
//     .filter((trans) => trans.status === "success")
//     .map((item) => ({
//       transactionId: item.id,
//       userId: item.userId,
//       amount: item.amount
//     }))
// }

//? using reduce() only:
function getSuccessfulTransactions(transactions) {
  return transactions.reduce((result, curTrans) => {
    if (curTrans.status === "success") {
      result.push({
        transactionId: curTrans.id,
        userId: curTrans.userId,
        amount: curTrans.amount
      })
    }
    return result;
  },[])
}



console.log(getSuccessfulTransactions(transactions))


//! Which array method(s) did you choose and why ?
//? i used filter + reduce method, so that filter method can filter out only that transaction whose status is success, then with the help of reduce method i returned the required object from each transaction in an array as per the output

//! Why is filter() alone insufficient ?
//? because it can only filter out the element whose status is success and it returns the whole transaction object

//! Why is map() alone insufficient ?
//? map() alone is insufficient because it transforms every transaction, including failed transactions. It doesn't remove elements based on a condition.

//! Would you prefer: filter().map() or map().filter() and why ?
// ? i would use filter().map() , so that filter first filter out all the transaction which is successfully done then for map() function would take each transaction and transform it into the desired output

//! What is the time complexity ?
//? filter()-> O(n), map() -> O(n)
//? T(n) = O(2n) = O(N)

//! What is the space complexity ?
//? Space complexity is O(m), where m is the number of successful transactions, because filter() creates an intermediate array and map() creates the final array. In the worst case, m = n, so O(n).

//! If there are 1 million transactions, is there any reason to consider a single - pass reduce() instead ?
//? yeah, it will save the time for extra iteration

//! Would using filter().map() create an intermediate array ?
// Yes, it will

//! Does "two array methods" automatically mean the solution is less performant than reduce() ?
// yeah comparatively if we see filter() + map() we are doing two iteration whereas using reduces it can be done in a single pass



//! NOTE: For normal application-sized data, I'd prefer filter().map() because it expresses the intent more clearly: first select successful transactions, then transform them. Both approaches are O(n). If profiling showed that we're processing a very large dataset and the intermediate array or additional traversal created a measurable performance or memory issue, I'd consider a single-pass reduce() to avoid the intermediate array.