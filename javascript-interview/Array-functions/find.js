const orders = [
  {
    id: "ORD-1001",
    customerId: 501,
    status: "delivered",
    total: 2499
  },
  {
    id: "ORD-1002",
    customerId: 502,
    status: "pending",
    total: 1299
  },
  {
    id: "ORD-1003",
    customerId: 501,
    status: "shipped",
    total: 4999
  },
  {
    id: "ORD-1004",
    customerId: 503,
    status: "pending",
    total: 899
  }
];
const customerId = 999;

function getLatestCustomerOrder(orders, customerId) {
 return orders.find((order) => order.customerId === customerId) ?? null;
}
console.log(getLatestCustomerOrder(orders, customerId))

//! Which array method did you choose and why?
//? i have used find method so that whenever the first condition met it stops the loop immedietly, which save a lots of unnecesary checks, and in case of large data this could be painfull

//! What happens if customerId = 999?
//? if the custometId = 999 and that customerId is not present inside the array then it will give undefined otherwise it will return the object of that customer id.

//! What's the best-case time complexity?
//? best-case time complexity can be O(1) if that customerId is present at the first index of the orders array

//! What's the worst-case time complexity?
//? the worst-case time complexity can be O(n) if that customerId is present at the last index of the orders array

//!Why would filter() be a worse semantic choice here?
//? filter() is the worst sementic choice here because it will traverse the whole aray and check each element, as we can see inside the orders array, there are two element which has customerId = 501, but one is delevered and other one is shipped , so what happens in the real world onece the order is delivered we can assign the previous id to new order, and by using filter() method we will get 2 data which can cause problem to identify what is the current needed element. 