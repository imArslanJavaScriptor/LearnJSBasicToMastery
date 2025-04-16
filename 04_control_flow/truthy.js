// 1 Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// 2 Truthy values: "0", 'false', " ", [], {}, function(){}
// const value = " "

// if(value) {
//      console.log("Truty Value")
// }else {
//     console.log("Falsy Value")
// }

// 3 Empty Array Check
// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// 4 Empty Object Check
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty")
// }

// 5 Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1);

// 6 Terniary Operator:  Basic Syntax ==>  condition ? true : false

const ShoesPrice = 800
const AmountInWallet = 1000
let PurchaseReuslt = AmountInWallet > ShoesPrice ? "Shoes are Your's" :  "Out of Budget"
console.log(PurchaseReuslt)
