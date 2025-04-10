// singleton ==> // Object.create

// object literals
const mySym = Symbol("key1")
const mySymbolValue = Symbol("Arslan")

const newUserObj = {
    userName: mySymbolValue, // here i used symbol as value
    [mySymbolValue] : "is a King", // here is used symbol as key
    userAge: 20,
    "user Profession": "Software Developer",
    userEmail:"im@Arslan.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    userLocation: "Lahore Punjab Pakistan"
}

console.log(newUserObj)
console.log(newUserObj.userAge)
console.log(newUserObj["user Profession"])


// Object.freeze(newUserObj)
newUserObj.userEmail = "Arslan@imArslan.com"
console.log(newUserObj.userEmail)


newUserObj.jobRole = function() {
    console.log(`Your'e a ${this["user Profession"]}`)
}
newUserObj.jobRole()