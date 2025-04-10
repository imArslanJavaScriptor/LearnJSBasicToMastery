// Dates

console.log("Date Methods")
let myDate = new Date()
console.log(myDate.toString()) // Output: Thu Apr 10 2025 02:47:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Output: Thu Apr 10 2025
console.log(myDate.toLocaleString()); // Output: 4/10/2025, 2:47:03 AM
console.log(myDate.toLocaleDateString()); // Output: 4/10/2025,
console.log(myDate.toLocaleTimeString()) //Output: 2:49:07 AM
console.log(typeof myDate) //Output: Object

console.log("My Created Date")
let customDate = new Date(2025, 0, 10)
console.log(customDate.toString())

customDate = new Date(2025, 0, 20, 5, 3)
console.log(customDate.toLocaleString())

customDate = new Date("2025-01-15")
console.log(customDate.toDateString())

customDate = new Date("01-10-2025")
console.log(customDate.toLocaleString())


console.log("Time Stamps")
let timeStamps = Date.now()
console.log(timeStamps)


console.log(customDate.getDay())
console.log(customDate.getMonth() + 1)

// Date Converted into Seconds from Miliseconds  
console.log(Math.round(Date.now()/1000))

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long",    
    calendar: "AM",
    dateStyle: "medium"
})
