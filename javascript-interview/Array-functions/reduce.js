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