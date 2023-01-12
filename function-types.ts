//----Function return type & void
function add(num1:number, num2:number, num3:number) {
    return num1 + num2 + num3
}

function printResult(num:number): void {
    console.log("The sum is " + num)
}

printResult(add(1,2,3))

//-----Function as type

let combinedValues: (a:number, b:number, c:number)=> number

combinedValues = add

console.log(combinedValues(2,2,2))

//-----Function as callback

function addAndhandle(n1:number, n2:number, callback: (n3:number)=>void) {
    const result = n1+n2
    callback(result)
}

addAndhandle(10,20,(result=>{
    console.log(result)
}))