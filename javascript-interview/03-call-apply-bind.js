//TODO:  1. call() method: 
const invoiceFormatter = {
  formatHeader: function (currency, locale){
    const formattedAmount = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(this.amount)
    console.log(`Invoice ${this.invoiceId} - Total: ${formattedAmount}`)
  }
}

const transaction= {
  invoiceId: 'INV-298',
  amount : 15744456.98
}


// invoiceFormatter.formatHeader.call(transaction, "USD", "en-US")


//TODO:  1. apply() method: 
const loggerService ={
  loggerSystemAlert : function(level, timeStamp, serviceName){
    console.log(`[${level.toUpperCase()}] [${timeStamp}] [${serviceName}]: ${this.message}`)
  }
}

const errorMessage = {
  message: 'Invalid metrics code: [object Object]'
}

const loggerMetrics = ["error", "2026-07-21", "Reference Error"]
// loggerService.loggerSystemAlert.apply(errorMessage, loggerMetrics)


// TODO: bind() method: 
const receiptService = {
  printService : function(currency, taxRate){
    const finalAmount = this.amount + (this.amount * taxRate)
    console.log(`Receipt for ${this.customerName}: ${currency}${finalAmount}`)
  }
}

const orderData ={
  amount : 400,
  customerName: "Faraaz Ashraf"
}

const orderReciept = receiptService.printService.bind(orderData, "$", 0.10);   //it will not invoke the function right now , instead it will preservce the value of this for later, so that we can use that function later anytime we want .
// orderReciept();


// TODO: Practice Question : 

// const user = {
//   name: "Damon",

//   greet: function () {
//     console.log(this.name);
//   }
// };

// const greetFunction = user.greet;

// greetFunction.call(user);

// TODO: Problem 1 — Function Borrowing with call() :
//! Constraints
//* Don't copy introduce() into employee2.
//* Don't modify either object.
//* Don't use an arrow function.
//* You must use call().
//* The company name "Google" must be passed as an argument.


const employee = {
  name: "Damon",
  role: "Frontend Developer",
  introduce: function (company) {
    console.log(
      `${this.name} is a ${this.role} at ${company}`
    );
  }
};

const employee2 = {
  name: "Alex",
  role: "Backend Developer"
};

// employee.introduce.call(employee2, "Google")


// TODO: call() with Multiple Arguments
/* 
Your task is to call calculateDiscount() using call() such that:

base      = 100
discount  = 20
tax       = 10
shipping  = 5

The expected result is: 95

Requirements
You must use call().
Don't modify calculator.
Don't modify calculateDiscount.
Don't manually assign this.
The three values must be passed as arguments to call().*/

// const calculator = {
//   base: 100
// };

function calculateDiscount(discount, tax, shipping) {
  return this.base - discount + tax + shipping;
}

// const result = calculateDiscount.call(calculator, 20, 10, 5)
// console.log(result);


/*
the arguments are already stored inside an array: const values = [100, 50, 25];

Where:
discount = 100
tax      = 50
shipping = 25

Your task:Use apply() to call calculateFinalPrice()
Expected output:475

Requirements
Must use apply().
Don't change calculateFinalPrice().
Don't manually extract the array values.
Don't use the spread operator (...).
calculator must become this.
 */
const values = [100, 50, 25];
const calculator = {
  base: 500
};

function calculateFinalPrice(discount, tax, shipping) {
  return this.base - discount + tax + shipping;
}

// const result = calculateFinalPrice.apply(calculator, values)
// console.log(result)
