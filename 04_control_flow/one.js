// 1: Single if Statement
const scoreForPower = 100
if(scoreForPower > 90) {
    let power = "Fly in Space"
    console.log(`You Just Unlocked Your New Super Power: ${power}`)
}

// 2:  if and else Statement
const temperature = 30
if(temperature === 30) {
    console.log("Temrature is Greater then 20")
}else {
    console.log("Temprature is less then 20")
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


// 3: Shoreter Syntax for returning Multiple Statement (Not Recommneded) 
// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
// if(true) console.log("I am Working 1"), console.log("I am Working 2"), console.log("I am Working 3"), console.log("I am Working 4") 
// Note: This is Possible we can write multiple statments by sepreting them via commas but it is not recommended BCZ Readability Should be High.

// 4: Nested if-else Statments
let accountBalance = 2000
if(accountBalance === 500) {
    console.log("You have 500 You Need 1500 More To Purchase This Product")
}else if(accountBalance === 1000) {
    console.log("You have 1000 You Need 1000 More To Purchase This Product")
}else if(accountBalance === 1500) {
    console.log("You have 1500 You Need 500 More To Purchase This Product")
}else if(accountBalance === 2000) {
    console.log("You have 2000 You Can Buy This Product")
}else {
    console.log("You Don't have Money in your Account")
}


// 5: Logical Operators && || Operators
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if(userLoggedIn && debitCard && loggedInFromGoogle && loggedInFromEmail) {
    console.log("You're The Most Secure User ")
}

if (userLoggedIn || debitCard || loggedInFromGoogle || loggedInFromEmail) {
    console.log("You're a Cool Dude Type User");
}