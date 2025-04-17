const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ // Passing Callback Function
    // console.log(val);
} ) 

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // Passsing Function Reffrence

// coding.forEach((value, index, array) => console.log(value, index, array))

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => console.log(`Language Name: ${item.languageName} and it's Extension Name: ${item.languageFileName}`))