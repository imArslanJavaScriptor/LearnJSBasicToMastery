let score = "100"
// let score = "100abc"
// let score = true

// console.log(typeof(score))

const valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

//  "100" => 100 (Successfully)
// "100abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let valueInBoolean = Boolean(isLoggedIn)
// console.log(valueInBoolean)

// 1 => true
// 0 => false
// "" => false
// "Arslan" => true

let numericValue = 200
let valueInString = String(numericValue)
console.log(typeof(valueInString))
console.log(valueInString)