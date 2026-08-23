//! You're building an analytics system -> You have many different users -> And every event you're currently processing is: 'const eventName = "PROFILE_VIEW"' -> Your existing processing pipeline cannot be modified i.e. processUsers()
/* Your task

Create a callback that can be passed directly into: processUsers(users, callback);
and produces:
[production] PROFILE_VIEW 101 undefined
[production] PROFILE_VIEW 102 undefined
[production] PROFILE_VIEW 103 undefined 

Requirements

Your callback must:

preserve analytics as this
pre-fill "PROFILE_VIEW" as eventName
allow processUsers() to provide userId
use bind()
don't modify analytics
don't modify processUsers()
don't create a wrapper function
*/

const analytics = {
  environment: "production",

  track: function (eventName, userId, metadata) {
    console.log(
      `[${this.environment}]`,
      eventName,
      userId,
      metadata
    );
  }
};
const users = [
  { id: 101, name: "Damon" },
  { id: 102, name: "Alex" },
  { id: 103, name: "John" }
];
const eventName = "PROFILE_VIEW";

function processUsers(users, callback) {
  users.forEach(user => {
    callback(user.id);
  });
}

//!NOTE: we have to create a callback which can be use later in code , so we will use bind method because it returns a new function this permanently bound to the specified value and can also pre-fill leading arguments. The original function is not executed immediately. 

const processCallback = analytics.track.bind(analytics, eventName)
processUsers(users, processCallback)