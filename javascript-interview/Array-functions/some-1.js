const permissions = [
  {
    resource: "users",
    action: "read",
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
//TODO: You need to determine whether the current user is allowed to delete at least one resource.

function canDeleteSomething(permissions) {
  return permissions.some((permission) => (
    permission.action === 'delete' &&
    permission.allowed
  ))
}
console.log(canDeleteSomething(permissions))


// ! 1. Which method did you choose and why ?
// ? i chose some() method because it checks every element and if any one of the element matches the condition it return the truthy value , an as per the question i has to search wheather the user can delete al least one resources.

//! 2. What happens if every permission has allowed: false ?
//? if every permission has allowed: false, in that case it will return falsy value

//!  3. What happens if permissions is empty ?
//? the answer will be false

// ! 4. What's the best-case and worst-case time complexity?
//? best-case : 0(1)
//? worst-case: O(n)

// ! 5. Why would filter() be a poor choice here ?
//? filter would be poor choice here because it will return the array of element , whereas the current situation need the value in tru or false.