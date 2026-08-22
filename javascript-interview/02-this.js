"use strict";

//TODO: ====================== this in global space ========================
// console.log('the value of this keyword in Global Space: ', this)


//TODO:  =================== this keyword inside a function ==========================
function x() {
  //* the value is totaly depends on strict / non-strict mode
  console.log('The value of this inside a function: ', this)
}
// x();

//! NOTE: If the value of this keyword is undefined or null, this keyword will be replaced with globalObject only in non-strict mode 

//! NOTE: the value of this keyword depends on how it is called
// x();
// window.x();


// //TODO:  =================== this inside a object's method ==========================
const obj = {
  a: 10,
  x: function () {
    console.log('The value of this keyword when it is called with an object method', this)
  }
}

// obj.x();

// ! NOTE: The value of this keyword inside an object is the object itself

//TODO:  =================== call, apply, bind method [Sharing method]==========================

const student1 = {
  name: 'Faraaz',
  printName: function () {
    console.log(this.name)
  }
}
// console.log('Name of student without call method: ');
// student1.printName();


const student2 = {
  name: 'Aiman'
}
// console.log('Name of student with call method: ')
// student1.printName.call(student2)


//TODO:  =================== this keyword inside arrow function =============
// !NOTE: Arrow function [() => {}] doesn't have their own this keyword, it retains the this value of the enclosing lexical context.
const object = {
  name : 'Damon',
  printName : () => {
    console.log(this)
  }
}
// console.log('Value of this keyword in Arrow Function : ')
// object.printName()

//TODO:  =================== this keyword in nested arrow function =============
const obj2 = {
  a: 20,
  x: function (){
    // enclosing lexical context
    const y = ()=>{
      console.log(this)
      
    }
    y();
  }
}
// console.log("The vlaue of this keyword in nested arrwo function :  ")
// obj2.x()



//! ================= Practice Question ========================
function createUser(name , age){
  return {
    name : name ,
    age: age ,
    introduce : function(){
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`
    }
  }
}
// const user1 = createUser("Damon", 25);
// const user2 = createUser("Alex", 30);

// console.log(user1.introduce());
// Hi, my name is Damon and I am 25 years old.

// console.log(user2.introduce());
// Hi, my name is Alex and I am 30 years old.


//! 2. Lost this
const user = {
  name: "Damon",

  greet: function () {
    return `Hello ${this.name}`;
  }
};

const greetFunction = user.greet.bind();
console.log(greetFunction());