//-----Union & Type Aliases/Custom Type
type Combineable = number | string
type resultCombine = "as-number" | "as-string"

function combine(input1: Combineable, input2: Combineable, resultConverstion: resultCombine){
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverstion === "as-number"){
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(39,26,"as-number")
console.log(combinedAges)

const combinedStringAges = combine("39", "26","as-number")
console.log(combinedStringAges)

const combinedNames = combine("Max","Hanna","as-string")
console.log(combinedNames)

//-----Union & Type Aliases/Object Type
type User =  { name: string; age: number }

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
  }
   
function isOlder(user: User, checkAge: number) {
    console.log(checkAge > user.age);
}

const result1 = greet({name:"Max",age:20})
const result2 = isOlder({name:"Max",age:20},30)