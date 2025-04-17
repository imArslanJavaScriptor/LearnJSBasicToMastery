const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`.${key} is Extension For ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set("Name", "Arslan")
map.set("Age", 20)
map.set("Intro", function() {
  return `${this.get("Name")} is ${this.get("Age")} year's old.`
})

let mapedFunc = map.get("Intro")
console.log(mapedFunc.call(map)) // ✅ manually bind 'map' as 'this'


for (const [key, value] in map) {
    console.log(`Key: ${key} and value: ${value}`);
}

const obj = Object.fromEntries(map); // => it convert [key, value] arrays pair into Object
for (const key in obj) {
  console.log(key, obj[key]);
}
