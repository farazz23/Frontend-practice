//! You're building a role/permission validation system for an admin dashboard.



const permissions = [
  {
    resource: "users",
    action: "read",
    allowed: true
  },
  {
    resource: "users",
    action: "create",
    allowed: true
  },
  {
    resource: "users",
    action: "delete",
    allowed: false
  },
  {
    resource: "projects",
    action: "read",
    allowed: true
  },
  {
    resource: "projects",
    action: "delete",
    allowed: true
  }
];

const requiredPermissions = [
  {
    resource: "users",
    action: "read"
  },
  {
    resource: "users",
    action: "create"
  },
  {
    resource: "projects",
    action: "read"
  }
];

//! The dashboard needs to determine whether the current user can perform every required action.


// function hasAllRequiredPermissions(
//   permissions,
//   requiredPermissions
// ) {
//     return requiredPermissions.every((required) => {
//       return permissions.some(
//         (permission) => 
//           permission.resource === required.resource &&
//         permission.action === required.action &&
//         permission.allowed === true
//         )
//     })
// }



//! Which method did you choose for the outer operation ?
//? "I used every() for the outer operation because the requirement is that every required permission must be satisfied. For each required permission, I use some() to determine whether at least one matching and allowed permission exists."

//! Which method did you choose for checking whether a required permission exists ?
//? every() method, so that it checks weather every every element of requiredPermission satisfies the condition in permsission array

//! Why might every() + some() be a natural solution ?
//? "every() + some() maps directly to the business requirement: every required permission must have some corresponding permission that matches the resource and action and is allowed. every() handles the 'all' requirement, while some() handles the 'at least one matching permission' requirement."

//! What happens if requiredPermissions is empty ?
//? It will give true.

//! What happens if permissions is empty ?
//? It will give false.

//! What is the best-case complexity ?
//? "The nested structure has a best case around O(R), because some() can short-circuit immediately for each required permission. The worst case is O(R × P)."

//! What is the worst-case complexity ?
//?

//! Can this be optimized using a Set or Map?
//? Yeah ofcourse: 

function hasAllRequiredPermissions(
  permissions,
  requiredPermissions
) {
  const permissonSet = new Set(
    permissions
    .filter((permission) => permission.allowed)
    .map((permission) => `${permission.resource}:${permission.action}` )
  )

  return requiredPermissions.every((required) => 
    permissonSet.has(
      `${required.resource}:${required.action}`
    )
  )
}
console.log(hasAllRequiredPermissions(permissions, requiredPermissions));


//! If there are 100,000 permissions and 10,000 required permissions, would your first solution still be ideal ?
//? No.

// This is where I would expect a 4 - year candidate to recognize the scalability problem.

// current implementation using every + some:

// requiredPermissions.every(required =>
//   permissions.some(...)
// )

// has worst -case:
// O(R × P)

// With:
// R = 10,000
// P = 100,000

// that's potentially:

// 10,000 × 100,000
//   = 1,000,000,000

// comparisons.
// That's unnecessarily expensive.
// I'd switch to a Set/Map-based lookup.

//! Explain the difference between semantic correctness and performance optimization in this problem.
//? "The original solution is semantically correct and very readable. For small datasets, I'd prefer it because it directly expresses the business rule. However, with large datasets, the nested search can become O(R × P), so I'd build an indexed Set or Map first and reduce the lookup cost to approximately O(P + R)."