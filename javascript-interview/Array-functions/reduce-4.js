//! This is a realistic API - data problem. You receive user records from multiple API responses:

const users = [
  {
    id: 101,
    name: "Damon",
    email: "damon@example.com",
    role: "developer"
  },
  {
    id: 102,
    name: "Alex",
    email: "alex@example.com",
    role: "designer"
  },
  {
    id: 101,
    name: "Damon",
    email: "damon@example.com",
    role: "developer"
  },
  {
    id: 103,
    name: "John",
    email: "john@example.com",
    role: "manager"
  },
  {
    id: 102,
    name: "Alex",
    email: "alex@example.com",
    role: "designer"
  }
];

//! The API occasionally returns duplicate users. Your frontend needs a deduplicated array of users, where uniqueness is determined by id.
//! Expected result:

// [
//   {
//     id: 101,
//     name: "Damon",
//     email: "damon@example.com",
//     role: "developer"
//   },
//   {
//     id: 102,
//     name: "Alex",
//     email: "alex@example.com",
//     role: "designer"
//   },
//   {
//     id: 103,
//     name: "John",
//     email: "john@example.com",
//     role: "manager"
//   }
// ]

//TODO:  Implement using reduce functio only:
// function deduplicateUsers(users) {
//   return users.reduce((unique, curUser) => {

//     //! check if the user id is already present inside the array
//     const existingUser = unique.find((user) => user.id === curUser.id);

//     //! if it is not present inside the array, then push it inside
//     if(!existingUser){
//       unique.push(curUser)
//     }

//     return unique;
//   },[])
// }


//TODO:  Implement using set function only:


console.log(deduplicateUsers(users))









//! What should the initial accumulator be ?
// ? the initial accumulator is an array.

//! Why are you using an array/object inside the accumulator?
//?  because the output requires the array of object 

//! How do you determine whether a user has already been seen ?
//? We wil go through every element inside the user array and check weather that element is present in resulant accumulator then we just skip that element otherwise we push that element inside the array  


//! What happens when a duplicate user appears ?
// ? When the duplicate user appears , we simply ignore that element/user

//! What happens if users is empty ?
//? the resultant array will be empty, because we have initialized the accumulator as an array

//! Time complexity ?
// ? it takes O(n) time to traverse thorugh the original users array, but when we use find it takes extra O(n) time-complexity to find the existing user because we are currently using find method which checks each element one by one that makes its time-complexity O(n) , so the total Time-complexity is O(n^2)

//! Space complexity ?
// ? it returns a new array of size 'm' , where m is the number of unique user , therefore the space-complecity goes till O(m)

//! Why might a Set or Map be preferable in production for this particular problem ?
function deduplicateUsers(users) {
  const seenId = new Set();

  return users.reduce((unique, currUser) => {
    const hasUser = seenId.has(currUser.id)
    if (!hasUser) {
      seenId.add(currUser.id);
        unique.push(currUser);
    }

    return unique
  }, [])
}
//? without using Set() the time-complexity is O(n^2), but if we use Set() then searching for each id takes only O(1) time, so it makes the time-complexity becomes O(n)