//! You're building an admin dashboard.The API returns:

const users = [
  {
    id: 101,
    name: "Damon",
    role: "developer",
    isActive: true,
    lastLogin: "2026-08-20"
  },
  {
    id: 102,
    name: "Alex",
    role: "designer",
    isActive: false,
    lastLogin: "2026-08-18"
  },
  {
    id: 103,
    name: "John",
    role: "developer",
    isActive: true,
    lastLogin: "2026-08-25"
  },
  {
    id: 104,
    name: "Sarah",
    role: "manager",
    isActive: true,
    lastLogin: "2026-08-21"
  }
];

const userId = 103;

// The dashboard needs to display the user profile of the requested user, but only if the user:

// Has the requested id
// Is currently active

// The expected result is:

// {
//   id: 103,
//     name: "John",
//       role: "developer",
//         lastLogin: "2026-08-25"
// }

// If the user doesn't exist or is inactive, return:

// null

//TODO:  Implement:

function getActiveUserProfile(users, userId) {
  const user = users.find((user) => user.id === userId)

  if (!user || !user.isActive) return null;

  return {
    id: user.id,
    name: user.name,
    role: user.role,
    lastLogin: user.lastLogin
  }
}

console.log(getActiveUserProfile(users, userId))



//! Which method did you choose and why?
//? i used find method to find the user whose user id matches the given userID , i  this method because it goes through each element and returns the whole object as an output, so that later on if you want to transform that single object according to you , then you cna do it

//! Why is filter() not the best choice ?
//? filter() is semantically inappropriate because it returns an array, while I need a single user. It also doesn't short-circuit when it finds a match, whereas find() stops at the first matching element.

//! Why is find() better here ?
// ? because it goes through each element and returns the whole object as an output, so that later on if you want to transform that single object according to you , then you cna do it

//! What happens if userId = 999 ?
//? it will give null if the userId = 999

//! What happens if the user exists but isActive === false ?
// result will be null

//! Best -case time complexity ?
// O(1) - if the required user is present at the first index

//! Worst -case time complexity ?
// O(n) - if the user is present at the last index of array

//! What is the space complexity ?
// O(1)

//! What would happen if you used map() ?
// "map() is inappropriate because its purpose is transformation, not searching. It transforms every element and returns an array of the same length. I need one matching user, so find() is the appropriate method."

//! Could reduce() solve it ? If yes, why would you not choose it ?
// "reduce() could solve the problem, but it would be semantically inappropriate and unnecessarily complex. reduce() is useful when I need to accumulate or build a result across multiple elements. Here I'm simply searching for one matching user, so find() communicates the intent much more clearly."