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
// console.log(typeof(valueInString))
// console.log(valueInString)

// ================= Operations ====================
let val = 3
let negValue = -val
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4)
// console.log(2%5)


let str1 = "Hi,"
let str2 = " Arslan"
let jointString = str1 + str2
// console.log(jointString)

// console.log("10" + 2)
// console.log(2 + "10")
// console.log("1" + 4 + 5)
// console.log(1 + 4 + "5")

// console.log(+true)
// console.log(+"")

let val1, val2, val3
val1 = val2 = val3 = 2 + 8
// console.table([val1, val2, val3])

let a = 10
let b = a++
console.log("a", a)
console.log("b", b)