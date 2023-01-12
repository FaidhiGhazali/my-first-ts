//----Function return type & void
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
function printResult(num) {
    console.log("The sum is " + num);
}
printResult(add(1, 2, 3));
//-----Function as type
var combinedValues;
combinedValues = add;
console.log(combinedValues(2, 2, 2));
//-----Function as callback
function addAndhandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
addAndhandle(10, 20, (function (result) {
    console.log(result);
}));
