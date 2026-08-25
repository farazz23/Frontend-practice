//TODO: Problem 1 — API Data Transformation

//! You're working on an admin dashboard. The backend returns:
const users = [
  {
    id: 101,
    firstName: "Damon",
    lastName: "Ashraf",
    email: "damon@example.com",
    isActive: true,
    role: "admin"
  },
  {
    id: 102,
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex@example.com",
    isActive: false,
    role: "user"
  },
  {
    id: 103,
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah@example.com",
    isActive: true,
    role: "user"
  },
  {
    id: 104,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    isActive: true,
    role: "manager"
  }
];

//! The UI doesn't need the complete backend object. It needs only:
//* {
//*   id,
//*     name,
//*     email,
//*     role
//* }
//* And only active users should be displayed.

//!NOTE: using filter method()
// function getActiveUsers(users) {
//   return users
//     .filter((user) => user.isActive)
//     .map((user) => {
//       return {
//         id: user.id,
//         name: user.firstName +" "+ user.lastName,
//         email: user.email,
//         role: user.role
//       }
//     })
// }

function getActiveUsers(users) {
  return users.reduce((result, user) => {
    if (user.isActive) {
      result.push({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role
      })
    }
    return result;
  }, [])
}

console.log(getActiveUsers(users))