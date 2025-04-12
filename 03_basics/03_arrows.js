const userObject = {
    userName: "Arslan",
    age: 20,
    welcomeMessage: function() {
        return `Hi, My Name is ${this.userName} and i'm ${this.age} now.`
    }
}

console.log(userObject.welcomeMessage())
userObject.userName = "Hadi"
console.log(userObject.welcomeMessage())


console.log(this);

function EveryDayKiChai() {
    let userName = "Alice Bob"
    console.log(this.userName)    
}

function tellMyName(yourName) {
    return `Your Name is: ${this.yourName}`
}
console.log(tellMyName("Arslan"))

const orderChai = () => {
    let chaiName = "Green Tea"
    console.log(this.chaiName)
}

orderChai()

const check = () => {
    let myName=  "Arslan"
    let myAge = 20
    console.log(this)
}

check()

const addition = (num1, num2) => {
    return num1 + num2 
}
console.log(addition(20, 50))

const addition2 = (num1, num2) => num1 + num2
console.log(addition2(200, 300))

const mySelf = (name, age, profession) => (`My Name is ${name} i'm a ${age} year's old ${profession} `)

console.log(mySelf("Arslan", 20, "Sofware Engineer"))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()