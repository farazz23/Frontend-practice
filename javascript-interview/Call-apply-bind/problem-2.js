// TODO : Problem 6 — Production Callback Problem
//*  You're working on a notification system ->  You receive users from an user API -> And you have a generic messag -> You want to pass sendNotification as a callback to this function 'processUsers()' ->
//? Expected Output:
//! [Email Service] Sending "Your report is ready" to Damon
//! [Email Service] Sending "Your report is ready" to Alex
//! [Email Service] Sending "Your report is ready" to John

/* 
 You must reuse notificationService.sendNotification.
Don't modify sendNotification.
Don't modify processUsers.
Don't create another wrapper function like:
(user) => notificationService.sendNotification(user, message)
You must use bind().
"Your report is ready" must be preserved as the second argument of sendNotification.
 */


const notificationService = {
  serviceName: "Email Service",

  sendNotification(message, user) {
    console.log(
      `[${this.serviceName}] Sending "${message}" to ${user}`
    );
  }
};

const users = [
  "Damon",
  "Alex",
  "John"
];

const message = "Your report is ready";

//! I have to pass sendNotification function as a callback to this function : 
function processUsers(users, callback) {
  users.forEach(user => {
    callback(user);
  }); 
}


// creating a callback function which can borrow the method from notificationService
const notification = notificationService.sendNotification.bind(notificationService, message)
processUsers(users, notification)

// the bind() syntax is basically fn.bind(this, arg1, arg2, arg3) but here processUser() takes user and a callback function , which i defined later in the code and called the function , but what i dont understand is that when i bind the object the first argument is object itself but the second argument is message whereas the first argument supposed to be user then message but here we havw(this, first arg = message), i dont understand this workflow, can you please dry run and explain each part in details so that i can explain this in an interview