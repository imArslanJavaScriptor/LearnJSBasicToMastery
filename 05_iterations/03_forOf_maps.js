// for of Loop

// ["", "", ""]
// [{}, {}, {}]

// Using with array
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
    console.log(number);
}

// Using with string
const greetings = "Blessings For You"
for (const greet of greetings) {
    let refined = greet.includes(" ") ? "Space" : greet
    console.log(`Each char is ${refined}`)
}

// Maps ==> For Unique values and Store Data in Order
const mapObject = new Map()
mapObject.set("Name","Arslan")
mapObject.set("Age", 20)
mapObject.set("Profession", "Software Engineering")
// mapObject.delete("Name")
// mapObject.clear()
console.log(mapObject.entries())
console.log("Data Type of Map:", typeof(mapObject))
console.log(mapObject)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key, value] of mapObject) {
    console.log(`Key: ${key} and Value: ${value}`)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

const userObj = {
    name: "Arslan",
    age: 20,
    profession: "Software Engineer"
}


// for (const [key, value] of userObj) {
//     console.log(key, ':-', value);
// }