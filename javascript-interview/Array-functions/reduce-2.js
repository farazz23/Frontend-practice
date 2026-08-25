//!NOTE:  You receive orders from an API:

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
  }
];

//! Your frontend needs to display orders grouped by customerId.
//? The desired result is:
// {
//   501: [
//     {
//       id: "ORD-101",
//       customerId: 501,
//       status: "delivered",
//       total: 2500
//     },
//     {
//       id: "ORD-103",
//       customerId: 501,
//       status: "delivered",
//       total: 3500
//     }
//   ],

//     502: [
//       {
//         id: "ORD-102",
//         customerId: 502,
//         status: "pending",
//         total: 1200
//       },
//       {
//         id: "ORD-105",
//         customerId: 502,
//         status: "delivered",
//         total: 2200
//       }
//     ],

//       503: [
//         {
//           id: "ORD-104",
//           customerId: 503,
//           status: "cancelled",
//           total: 1800
//         }
//       ]
// }

//TODO: Solution: 

function groupOrdersByCustomer(orders) {
  return orders.reduce((grouped, order) => {
    const customerId = order.customerId;

    //* if the customer's Id is not exists in the object, then crearte an empty array for that customer : 
    if (!grouped[customerId]) {
      grouped[customerId] = []
    }

    //* add the customer order in that array which we created above
    grouped[customerId].push(order)

    return grouped;
  }, {})
}

console.log(groupOrdersByCustomer(orders))


//! What should the initial value of reduce() be ?
//? initial value of reduce would be an empty object

//! What does your accumulator represent ?
//? the accumulator represents the updating state on each iteration

//! How do you handle the first order for a customer ?
// 

//! How do you handle subsequent orders for the same customer ?

//! What is the time complexity ?

// ? the time-complexity is O(n)

//! What is the space complexity ?
//? the space-complexity is o(n) because we have returned an object on size n

//! Why is reduce() a natural fit for grouping / indexing data ?
// ? reduce() provides us two argument where first one gets updated after every iteration and takes care of the calculation under the hood, whereas  the second one provides the element to work on simultaneously without creating these two variable explicitly, whic handle the 