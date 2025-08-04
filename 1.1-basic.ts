// Create variables
var username: string;
var age: number;
var isAdmin: boolean;
// function to return greeting
function greetUser(username: string, age: number):string {
    return `Welcome ${username} your age is ${age}`;
}
var greeting = greetUser("me", 22);
console.log(greeting);