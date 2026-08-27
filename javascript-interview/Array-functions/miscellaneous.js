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

//! The dashboard needs to display only customers who have at least one delivered order, with a summary:

// [
//   {
//     customerId: 501,
//     deliveredOrders: 2,
//     revenue: 6000
//   },
//   {
//     customerId: 502,
//     deliveredOrders: 1,
//     revenue: 2200
//   }
// ]

// Notice:

// Customer 501 → 2 delivered orders → ₹6000
// Customer 502 → 1 delivered order → ₹2200
// Customer 503 → no delivered orders → completely excluded


function getDeliveredCustomerSummary(orders) {
  return orders
    .filter((order) => order.status === "delivered")
    .reduce((result, order) => {
      const existingOrder = result.find(c => c.customerId === order.customerId);

      if (existingOrder) {
        existingOrder.deliveredOrders++,
          existingOrder.revenue += order.total
      } else {
        result.push({
          customerId: order.customerId,
          deliveredOrders: 1,
          revenue: order.total
        })
      }

      return result;
    }, [])
}
console.log(getDeliveredCustomerSummary(orders))