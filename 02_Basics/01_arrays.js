// array
const myArr = ["Twenty One", 22, 10, 5, 9, true, false]
const myHeors = ["AK", "Safeguard"]

console.log(myArr)

const arr2 = new Array("Apple", "Mango", "Orange", "Banana")
// console.log(arr2[2])

// Array methods
arr2.push("New Data")
arr2.push("Mobile")
arr2.pop()

arr2.unshift("New Added Data")
arr2.shift()
console.log(arr2)

console.log(arr2.includes("Mobile"))
console.log(arr2.indexOf(3)); // output -1 which indicates that value is not available 

console.log(arr2.indexOf("Banana"));
const newArr = arr2.join() // .join() method converts array into string.

console.log(typeof newArr)
console.log(newArr)


// slice, splice

console.log("A", arr2)
const mynArr = arr2.slice(1, 3) // this method did not change actual array

console.log(mynArr);
console.log("B ", arr2);


const  mynArr2 = arr2.splice(1, 3) // but this method change the ornigal array
console.log("C ", mynArr);
console.log(arr2);

// !Importent Definations

// Shallow Copy shares the same reference point, so any changes made to the copy can also affect the original values.

// Deep Copy does not share the same reference point. It creates a completely new copy, so any changes made do not affect the original values.
