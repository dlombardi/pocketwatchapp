'use strict'


$("document").ready(init);
​
var ref = new Firebase("https://tc-pocketwatch.firebaseio.com/")
var usersRef = ref.child("users");
​
function init() {
  console.log('it works');
}
​
$("#loginButton").on("click", function(e) {
  var $phoneInput = $("#phoneInput").val();
  console.log("event handler works. Button clicked."+ $phoneInput);
  AddorCreate($phoneInput);
});
​
var totalUsers = ref.on("child_added", function(snapshot) {
  console.log("Child added to fb! Here's new data: ",snapshot.val());
});
​
​
// function AddorCreate(e){
//   users.
//
//   //if user does not match snapshot then create user in users child.
// usersRef.createUser({
//   email: "bobtony@firebase.com",
//   password: "correcthorsebatterystaple"
// }, function(error, userData) {
//   if (error) {
//     switch (error.code) {
//       case "EMAIL_TAKEN":
//         console.log("The new user account cannot be created because the email is already in use.");
//         break;
//       case "INVALID_EMAIL":
//         console.log("The specified email is not a valid email.");
//         break;
//       default:
//         console.log("Error creating user:", error);
//     }
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//   }
// });
//   console.log("firebase would be triggered to add or create a user.");
// }
