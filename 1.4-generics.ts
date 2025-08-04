var number:number[]= [1,2,3,4];
var string:string[]= ['a','e','i'];
type T = number | string;
function getFirstItem(arr: T[]): T{
    return arr[0];
}
var num = getFirstItem(number);
var str = getFirstItem(string);
console.log(`First num is ${num}`);
console.log(`first str is ${str}`);