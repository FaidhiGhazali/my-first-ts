const number1 = 12
const number2 = 12
const result = true
const phraseResult = "Result is "

function add(num1: number, num2: number, showResult: boolean, phrase: string){
    let finalResult = num1 + num2
    if (showResult) {
        console.log(phrase + finalResult)
    } else {
        return finalResult
    }
}

const age: number = 29;
console.log(age)
add(number1, number2, result, phraseResult)!