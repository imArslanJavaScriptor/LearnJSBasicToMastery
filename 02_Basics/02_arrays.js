const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allHerosTogether =[...marvel_heros, ...dc_heros]
console.log(allHerosTogether);

const deeplyNestedArray = [1,2,3, ["One", "Tow", "Three", "Four"], "Superman", ["Arslan", ["Arslan is a Good Boy", [1,2,3,4,5]]]]
// const real_another_array = another_array.flat(Infinity)

let flatedArr = deeplyNestedArray.flat(3)
// console.log(flatedArr.find(item => item === "Arslan"))

// console.log(Array.isArray("Hitesh"))
console.log(Array.isArray("Arslan"))
console.log(Array.from("Arslan is a Good Boy"))

// console.table(typeof(Array.isArray("Arslan")))
// console.table(typeof(Array.from("Arslan is a Good Boy")))

console.log("Intresting",  Array.from({myName: "Arslan"}))

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 500

console.log(Array.of(score1, score2, score3, score4))