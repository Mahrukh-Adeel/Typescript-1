// creating array
var users = [{ id: 1, name: 'me' }, { id: 2, name: "m", email: 'm@mail.com' }];
// function 
function getUserName(user) {
    return user.name;
}
console.log('Your name is ' + getUserName(users[1]));
