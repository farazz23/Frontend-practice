



//! 1. Clouser is using for Data Privacy and Encapsulation : 
// function createAuthManager(){
//   let jwtToken= null;

//   return {
//     setToken(newToken) {
//       if (newToken.startsWith('Bearer ')) {
//         jwtToken = newToken;
//       }
//     },
//     getToken() {
//       return jwtToken
//     },
//     clearToken() {
//       jwtToken = null;
//     }
//   }
// }

// const auth = createAuthManager();
// auth.setToken('Bearer absksbfgjsvnjb');


// console.log('This is the JWT Token', auth.getToken())
// console.log(auth.jwtToken)


//! 2. Clousers is using for Event Handling(Debounce/throtling) & Rate-Limiting: 
// function debounce(apiCall, delay){
//   let timerId;

//   return function (...args){
//     clearTimeout(timer)
//     timerId = setTimeout(() =>{
//       apiCall(...args)
//     },delay )
//   }
// }

// const handleInput = debounce((searchQuery)=>{
//   fetch(`/api/search?q=${searchQuery}`)
// }, 300)


//TODO:  Create a function called createCounter().
//* It should return an object with three methods:
//* increment() → increases the counter by 1
//* decrement() → decreases the counter by 1
//* getValue() → returns the current counter value


function createCounter(){
  let count= 0;

  return {
    increment: function (){
      return ++count;
    },
    decrement: function(){
      return --count;
    },
    getValue(){
      return count;
    },
    resetCount : function (){
      count= 0;
    }
  }
}

// let counter1 = createCounter();
// let counter2 = createCounter();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// counter2.increment()
// counter2.increment()

// console.log('The value of Count 1: ',counter1.getValue());
// counter1.decrement()
// counter1.decrement()
// console.log('The value of Count 1: ',counter1.getValue());

// console.log('The value of Count 2: ', counter2.getValue());
// counter2.decrement()
// console.log('The value of Count 2: ', counter2.getValue());

// counter1.resetCount()
// counter2.resetCount()
// console.log('The value of Count 1 after reset: ', counter1.getValue());
// console.log('The value of Count 2 after reset: ', counter2.getValue());



// TODO: Requirements
//* createMultiplier() receives the multiplier.
//* It returns a function.
//* The returned function receives a number.
//* The returned function multiplies that number by the multiplier.
//* The multiplier must be remembered using a closure.
//*   Different multiplier functions must remain independent.

function createMultiplier(multiplier){
  return function(number){
      return multiplier * number;
  }
}

// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// const tenTimes = createMultiplier(10);

// console.log(double(5));    // 10
// console.log(double(20));   // 40

// console.log(triple(5));    // 15
// console.log(tenTimes(7));  // 70


// TODO : Private Bank Account
//! Requirements
//* balance must be private.
//* balance must not be accessible directly from outside the function.
//* The returned methods must access balance using a closure.
//*   deposit(amount) should increase the balance.
//*     withdraw(amount) should decrease the balance.
//*       getBalance() should return the current balance.
//* A withdrawal should not be allowed if there isn't enough money.


function createBankAccount(initialBalance){
  let transactionCount = 0;
  return {
    deposit: function(amount){
      initialBalance += amount;
      ++transactionCount;
    },
    withdraw: function (amount){
      if (initialBalance >= amount ){
        initialBalance -= amount;
        ++transactionCount;
      }
    },
    getBalance : function (){
      return initialBalance;
    },
    getTransactionCount: function (){
      return transactionCount;
    }
  }
}

// const account = createBankAccount(1000);

// account.deposit(500);  
// account.withdraw(200);  
// account.withdraw(5000); 

// console.log(account.getTransactionCount()); 


// TODO: Requirements
//* The score must start at 0.
//* score must be private.
//* All four methods must operate on the same score variable.
//*   reset() sets the score back to 0.
//* subtractScore() must not allow the score to become negative.

function createScoreManager(){
  let score = 0;
  let scoreChange =[]

  return {
    addScore : function (point){
      score+=point;
      scoreChange.push(point)
    },
    subtractScore : function(point){
      if(score >= point){
        score -= point;
        scoreChange.push(-1*point)
      }
    },
    getScore : function(){
      return score;
    },
    reset: function (){
      score= 0;
    },
    getHistory : function (){
      return scoreChange;
    }
  }
}
const player = createScoreManager();

player.addScore(10);
player.addScore(20);
player.subtractScore(5);
player.subtractScore(100);

console.log(player.getHistory());