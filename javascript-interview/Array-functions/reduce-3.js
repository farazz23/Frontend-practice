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


//! The analytics dashboard needs a summary per customer: 

// {
//   501: {
//     totalOrders: 3,
//       deliveredOrders: 2,
//         totalRevenue: 6000
//   },

//   502: {
//     totalOrders: 2,
//       deliveredOrders: 1,
//         totalRevenue: 2200
//   },

//   503: {
//     totalOrders: 1,
//       deliveredOrders: 0,
//         totalRevenue: 0
//   }
// }


function getCustomerOrderSummary(orders) {
  
  return orders.reduce((groupedItem, currentOrder) => {
    const customerId = currentOrder.customerId;

    if(!groupedItem[customerId]) {
      groupedItem[customerId] = {
        totalOrders: 0,
        deliveredOrders: 0,
        totalRevenue: 0
      }
    }

    if (currentOrder.status === "delivered"){
      groupedItem[customerId].totalRevenue += currentOrder.total;
      groupedItem[customerId].deliveredOrders++;
    }

    groupedItem[customerId].totalOrders++;
    return groupedItem;

  }, {})
}

console.log(getCustomerOrderSummary(orders))


//! What should the initial accumulator look like ?
// ? The initial accumulator shuold look like an empty object

//! What should happen when we encounter a customer for the first time ?
//? We assign an object for that customer with some property with initial value 

//! What should happen when we encounter another order from an existing customer ?
// ? Instead of assigning a new object to that customer we manupulate the same data according to the condition

//! How do you increment totalOrders ?
// ? everytime the customer'd id matches, we increment the totalOrder irrespective of its status , either is it delivered, cancelled, or pending 

//! When should deliveredOrders increase ?
// ? the deliveredOrder should increase only when the order's status is delivered

//! When should totalRevenue increase ?
// ? only when the order is delivered

//! What is the time complexity ?
// ? Time-Complexity : O(n)

//! What is the space complexity ?
// ? Space-complexity : O(n)

