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

const user = {
  name: "Damon",

  greet: function () {
    console.log(this.name);
  }
};

const greetFunction = user.greet;

greetFunction.call(user);

