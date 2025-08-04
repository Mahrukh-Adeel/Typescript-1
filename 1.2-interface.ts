// creating interface
interface User{
    id: number,
    name: string,
    email?: string //optional
}
// creating array
let users :User[]= [{id:1, name:'me' }, {id:2, name: "m", email:'m@mail.com'}] ;
// function 
function getUserName(user: User): string{
    return user.name;
}
console.log('Your name is '+ getUserName(users[1]))