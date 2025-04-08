// kis trike se data ko memory ma access kia jata ha or rakha jata ha us basis pr data ki 2 categorizations ha Primitive & Refrence Types.

// #1 Primitve Types (call by value)
// 7 Types: Null, Number, String, Symbol, Boolean, BigInt, undefined

// #2 Non-Primitve or Refrence Types
// Objects, Arrays, Functions

// Note: JS is a Dynamically Typed Programming Language & TypeScript is Statically Typed Programming Language.

//  Primitives Examples

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log("Symbole 1", id)
console.log("Symbol 2", anotherId)

console.log(id === anotherId)


console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) Examples

const heros = ["Arslan", "Hadi", "Bahadur"];
let myObj = {
    name: "Arslan",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3