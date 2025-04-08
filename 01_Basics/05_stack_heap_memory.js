// Stack (Primitve)
// Primitive Data Types ma Stack Memory use hot ha 
// Jb bhi koi value Stact memory ma store hoti ha to waha se milta ha 
// us value ki copy

let myName = "HMArslan"
let anotherName = myName

anotherName = "Arslan"
console.log(myName)
console.log(anotherName)


// Heap (Non-Primitive)
// Non-Primitive Data Types ma Heap Memory use hot ha 
// Jb bhi koi value Heap memory ma store hoti ha to waha se milta ha 
// hme Original value ka refrence.


let user1 = {
    name: "Arslan",
    age: 20
}


let user2 = user1
user2.name  = "HM-Arslan"

console.log(user1)
console.log(user2)