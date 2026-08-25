// TODO:  You're building an e-commerce admin dashboard.The API returns:

const orders = [
  {
    id: "ORD-101",
    customerId: 501,
    status: "delivered",
    total: 2500
  },
  {
    id: "ORD-102",
    customerId: 502,
    status: "pending",
    total: 1200
  },
  {
    id: "ORD-103",
    customerId: 501,
    status: "delivered",
    total: 3500
  },
  {
    id: "ORD-104",
    customerId: 503,
    status: "cancelled",
    total: 1800
  },
  {
    id: "ORD-105",
    customerId: 502,
    status: "delivered",
    total: 2200
  },
  {
    id: "ORD-106",
    customerId: 501,
    status: "pending",
    total: 1000
  }
];

//!NOTE:  The finance dashboard needs: Calculate the total revenue generated from delivered orders only.

function calculateDeliveredRevenue(orders) {
  const initialRevenue = 0
  return orders.reduce((acc, value) => {
    return value.status === "delivered" ? acc + value.total : acc;
  }, initialRevenue)
}


console.log(calculateDeliveredRevenue(orders))


//! Why did you choose reduce() ? :
// ? reduce method help in combining the whole array into one single value with the hlop of its argument accumulator which changes after every iteration and curVal which help in providing the value which goes in accumulator

//!   What is the role of the accumulator ?
// ? Role of Accumulator is to update in every iteration

//!     What should the initial value of the accumulator be ?
// ? the initial value shuold be 0

//!       What happens if orders is an empty array ?
//? the final result will be 0;

//!         What's the time complexity?
// ? Time complexity : O(n)

//! What's the space complexity?
// ? the space complexity is O(1) because it return a single value not an array

//! Could you solve this using filter() + reduce() ? If yes, which approach would you prefer and why ?
//? Yes, we can solve this using filter() + reduce() but i will prefer the solution with filter + reduce method because the filter method will filter all the element and pass only the element which is delivered and then reduce method will do its calculation , it is more understandable and easy to understand and gives more clarity and the time-complexity of both the solution is O(n) so why not using cleaner method

function calculateDeliveredRevenue(orders) {
  const initialRevenue = 0
  return orders
    .filter((order) => order.status === "delivered")
    .reduce((acc, value) => {
      return acc + value.total
    }, initialRevenue)
}
