const user = {
  name: "Damon"
};

function greet() {
  console.log(this.name);
}

const greetUser = greet.bind(user);

const anotherUser = {
  name: "Alex"
};

const finalGreet = greetUser.bind(anotherUser);

finalGreet();