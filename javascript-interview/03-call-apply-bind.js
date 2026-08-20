//! 1. Method Borrowing in Multi-Tenant Apps : 
// const invoiceHeader = {
//   formatHeader : function (currency , locale){
//     const formatAmount = new Intl.NumberFormat(locale, {
//       style : 'currency',
//       currency
//     }).format(this.amount)

//     return `Invoice ID: #${this.invoiceId} - Total : ${formatAmount}`
//   } 
// }

// const transaction = {
//   invoiceId: 'INV-994',
//   anount: 1435.90
// }

// const invoiceText = invoiceHeader.formatHeader.call(transaction, "USD", "en-US");
// console.log(invoiceText)


// ! 2. apply() — Passing Arguments as an Array
const loggerService = {
  logSystemAlert: function (level, timestamp, serviceName) {
    console.log(`[${timestamp}] [${level.toUpperCase()}] [${serviceName}]: ${this.message}`);
  }
};

const errorLog = { message: "Database connection timeout" };

// Dynamic arguments pulled from a log processor payload array
const logMetadata = ["error", "2026-08-19T10:00:00Z", "AuthService"];

// Pass the array directly with apply
loggerService.logSystemAlert.apply(errorLog, logMetadata);
// Output: "[2026-08-19T10:00:00Z] [ERROR] [AuthService]: Database connection timeout"