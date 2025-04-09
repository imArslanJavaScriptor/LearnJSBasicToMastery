const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


console.log("Arslan".charAt(1))
console.log("Arslan"[4])
console.log("y" < "z")

function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }

  
console.log(areEqualCaseInsensitive("Arslan", "Arslan"))
let strOne = String("Arslan")
let strTwo =  new String("Arslan King")
console.log(strOne)
console.log(strTwo)
// console.log(strOne.anchor("google"))

const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
index = -13;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
console.log(`An index of ${index} returns the character ${sentence.charAt(index)}`);

// charCodeAt
index = 10;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"

const str1 = "Hello";
const str2 = "Beautiful";
const str3 = "World"

// console.log(str1.concat("-", str2, "-", str3))
console.log(str1.concat(" ", str2, " ", str3))

let myName = "Arslan"
myName = myName.toLowerCase()
// console.log(myName.endsWith("n"))
// console.log(myName.startsWith("a"))

console.log(
    `The word Lazy ${
      sentence.includes("lazy") ? "is" : "is not"
    } in the sentence`,
);

let myNameStr = "HM-Arslan"
let King = myNameStr.includes("A") ? "Arslan is a Kign" : "Sorry"
// console.log(King)

let firstCharIndexChecker = "My Name is Arslan and Arslan is a Good Boy"
let lastCharIndexChecker = "My Name is Arslan and Arslan is a Good Boy"
// console.log(firstCharIndexChecker.indexOf("Arslan"))
// console.log(lastCharIndexChecker.lastIndexOf("Arslan"))


const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

const mood = "Happy! ";
// console.log(`I feel ${mood.repeat(5)}`);

const paraOne = "I think Aleena's Cat is beter them your Cat"
// console.log(paraOne.replace("Aleena's", "my"))
// console.log(paraOne.replaceAll("Cat", "Laptop"))


// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
let str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31));
console.log(str.slice(4, 19));
console.log(str.slice(-4));
console.log(str.slice("-9", "-5"))
console.log(str)

console.log(sentence.split(" "))
console.log(sentence.split(" ").map(item => item.toUpperCase()))

const newStr = "My Life is Like a Lion";
console.log(newStr.substring(3, 10))
console.log(newStr.substring(11))

const strObj = new String("Cool");
console.log(typeof strObj);
console.log(strObj.toString())
console.log(strObj.valueOf())
console.log(typeof(strObj.toString()));
console.log(typeof(newStr.valueOf()))

const icons = "☃★♲";
// console.log(icons.codePointAt(1));
// Expected output: "9733"
// String.__proto__.at => can check for both positive and Negative Integers
// String.__proto__.charAt => can check only for positive Integers
// String.__proto__.charCodeAt => can check  for the UFT-16 Code for the partcular index Integer.
