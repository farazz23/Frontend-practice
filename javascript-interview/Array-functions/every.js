//TODO:  You're building a frontend form submission flow. Before submitting an order, you receive cart items:

const cartItems = [
  {
    productId: 101,
    name: "Mechanical Keyboard",
    quantity: 1,
    price: 4999,
    inStock: true
  },
  {
    productId: 102,
    name: "Wireless Mouse",
    quantity: 2,
    price: 1999,
    inStock: true
  },
  {
    productId: 103,
    name: "USB Hub",
    quantity: 1,
    price: 1499,
    inStock: false
  }
];

//! NOTE: you need to determine whether: Every item in the cart is currently in stock AND has a valid quantity greater than 0.

function canPlaceOrder(cartItems) {
  return cartItems.every((item) => (item.inStock && item.quantity > 0))
}

console.log(canPlaceOrder(cartItems))

//! Why did you choose every() instead of some() ?
//? every method() checks every element of an array under a certain condition , if any on of the item fails to pass the condition, it returns false


//!   What happens if one item has quantity: 0 ?
//? it will return false

//! What happens if cartItems is[] ?
//? it will return true

//! What is the best-case complexity ?
//? O(1), if the element is on first place which doesnt matches the condition, it will not go any further and return a false value.

//! What is the worst-case complexity ?
//? O(n)

//! Explain the difference between: cartItems.every(...) and cartItems.some(...)
//? cartItems.every(...) will give true value only if every element matches the condition , and cartItems.some(...) will give true value even if one of the element passes the condition

//! why every() on an empty array returns true :
//? every() checks , if every element passes the test. it starts with true and only become false if the condition voilates.


//!  why some() on an empty array returns false :
//? some() method checks , if atleast on element pass the test, it starts with false and only become fale true of at least one condition satisfies.