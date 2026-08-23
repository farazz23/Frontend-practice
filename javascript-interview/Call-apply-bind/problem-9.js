const paymentService = {
  provider: "Stripe",

  process(amount) {
    console.log(
      `${this.provider}: Processing ₹${amount}`
    );
  }
};

function retryPayment(paymentFunction, amount) {
  setTimeout(() => {
    paymentFunction(amount);
  }, 1000);
}

const paymentFunc = paymentService.process.bind(paymentService)
retryPayment(paymentFunc, 5000)


// Expected output ->  Stripe: Processing ₹5000





function calculate(a, b) {
  console.log(this.value);
  console.log(a);
  console.log(b);
}

const obj = {
  value: 100
};

const calculateWithA = calculate.bind(obj, 10);

calculateWithA(20);

//! What is this.value ?
//? value of this is obj, this.value === obj.value

//!   What is a ?
//? the value of a is 10

//! What is b ?
//? the value of b is 20

//! What arguments were supplied when bind() was called ?

//! What arguments were supplied when the bound function was called ?