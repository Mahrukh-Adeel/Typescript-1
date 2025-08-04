var number = [1, 2, 3, 4];
var string = ['a', 'e', 'i'];
function getFirstItem(arr) {
    return arr[0];
}
var num = getFirstItem(number);
var str = getFirstItem(string);
console.log("First num is ".concat(num));
console.log("first str is ".concat(str));
