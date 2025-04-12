function sayMyName() {
    console.log("A")
    console.log("r")
    console.log("s")
    console.log("l")
    console.log("a")
    console.log("n")
}
sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbersAndReturn(number1, number2){
    let result = number1 + number2
    return result
    return number1 + number2 // all the code after return stgatmenet won't be execute
}

const result = addTwoNumbers(3, 5) // Undefined BCZ it does not return anything
const result2 = addTwoNumbersAndReturn(20, 10) // Output: 30
console.log("Result 1:", result)
console.log("Result 2:", result2)

// function loginUserMessage(username) {
//     if(!username) {
//         console.("Please Enter username")
//         return
//     }
//     return (username)
// }

function loginUserMessage(username) {
    if(!username) {
        return "Please Enter username"
    }
    return `${username} Welcome to our Platform`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Arslan King"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

function calculateProductsPrice(...product) {
    let total = product.reduce((acc, curr) => acc + curr, 0)
    return total
}
let yourBill = calculateProductsPrice(100,200,300,550,450)
console.log("Your Bill", yourBill)


const userObj = {
    userName: "Arslan",
    price: 1200
}

function handleObject(anyobject) {
    return `Username is ${anyobject.userName} and User Bill is: ${anyobject.price}`
}

console.log(handleObject(userObj)) // You have Passed Object Refference Here
console.log(handleObject({ 
    userName: "HM-Arslan",
    price: 2000
})) // You have Passed full Object Defination Here.

const newArray = [100,200,300,400,500,600]
const newArray2 = ["Arslan","King",300,400,500,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray))
console.log(returnSecondValue(newArray2))