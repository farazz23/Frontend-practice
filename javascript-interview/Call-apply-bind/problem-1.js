//! You have a pricing service:

const pricingService = {
  currency: "INR",

  calculateTotal: function (discount, taxRate, shippingCharge) {
    const discountedPrice = this.price - discount;
    const tax = discountedPrice * taxRate;

    return {
      price: this.price,
      discount,
      tax,
      shipping: shippingCharge,
      total: discountedPrice + tax + shippingCharge,
      currency: this.currency
    };
  }
};


const order = {
  id: "ORD-1024",
  customer: "Damon",
  price: 25000
};

const pricingConfig = {
  discount: 2000,
  taxRate: 0.18,
  shippingCharge: 250
};

//!  The problem is:
//! order doesn't have calculateTotal(), but you must reuse the existing implementation from pricingService.


//TODO: Solution: 
function getOrderTotal(order, pricingConfig) {
  // creating this temprory object because the function which we are goin gto borrow has to this keyword pointing to two different object.
  const context = {
    price: order.price,
    currency: pricingService.currency
  }


  // return pricingService.calculateTotal.apply(context, params);
  return pricingService.calculateTotal.apply(
    context, [
    pricingConfig.discount,
    pricingConfig.taxRate,
    pricingConfig.shippingCharge
  ]);

}

console.log(getOrderTotal(order, pricingConfig))















// TODO: Practice Question :

// const user = {
//   name: "Damon",

//   greet: function () {
//     console.log(this.name);
//   }
// };

// const greetFunction = user.greet;

// greetFunction.call(user);









