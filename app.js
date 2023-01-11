function combine(input1, input2, resultConverstion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverstion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(39, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("39", "26", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Max", "Hanna", "as-string");
console.log(combinedNames);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    console.log(checkAge > user.age);
}
var result1 = greet({ name: "Max", age: 20 });
var result2 = isOlder({ name: "Max", age: 20 }, 30);
