// Create variables
var username;
var age;
var isAdmin;
// function to return greeting
function greetUser(username, age) {
    return "Welcome ".concat(username, " your age is ").concat(age);
}
var greeting = greetUser("me", 22);
console.log(greeting);
