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

function groupOrdersByCustomer(orders) {
  const groupedItem = {};
  return orders.map((order) => {
    const customerId = order.customerId;
    if (!groupedItem[customerId]){
      groupedItem[customerId] = []
    }

    groupedItem[customerId].push(order);
    return groupedItem;
  })
}
console.log(groupOrdersByCustomer(orders))