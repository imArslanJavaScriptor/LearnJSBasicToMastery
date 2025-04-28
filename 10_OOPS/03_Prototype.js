let myName = "Arslan"
let myYouTubeChannelName = "imArslan"
let myHeros = ["Super Man", "Bat's Man"];


let heroPower = {
  superMan: "Laser",
  batMan: "Un-Betable Will Power",

  getSuperManPower: function() {
    return `Super Man Have ${this.superMan} Power`
  },
  getBatManPower: function() {
    return  `Bat Man Have ${this.batMan}`
  }
}

Object.prototype.ars = function() {
  return `Arslan is Present in All Objects`
}
Array.prototype.willPowerQuote = function () {
  return `Where there is a will there is a way`
}

console.log(heroPower.ars())
console.log(myHeros.willPowerQuote())

// inheritance
const User = {
  name: "Arslan",
  email: "Arslan@King.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}
const STSupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__:TeachingSupport
}
Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(Object.getPrototypeOf(TeachingSupport))


let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function() {
  console.log (`True Length is: ${this.trim().length}`)
}


anotherUsername.trueLength()
myName.trueLength()
myYouTubeChannelName.trueLength()
