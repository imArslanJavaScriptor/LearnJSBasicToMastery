// 1: Basic For Loop
for (let i = 1; i <= 10; i++) {
    // console.log(i)    
}

// 2: Working on Arrays
let arr1 = [1,2,3,4,5,6]
let arr2 = []
for (let i = 1; i < arr1.length; i++) {
    arr2.push(arr1[i])
}
// console.log("Updated Arr2 ",arr2)

// 3: Nested For Loop
let PakistanHeroes = ["Quaid-e-Azam", "Allama Iqbal", "Imran Khan", "HM-Arslan"]
for (let i = 0; i < PakistanHeroes.length; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let innerI = 1; innerI <= 5; innerI++) {
    // console.log(`Inner loop value ${innerI} and Outer loop ${i}`);
        // console.log(`${PakistanHeroes[i]} is Great`)
    }    
}

// 4: Break & Continue
for (let i = 1; i <= 10; i++) {
    if(i === 5) {
        console.log("5 is Detected Break this loop")
        break
    }
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        console.log("5 is Detected Now Continue")
        continue
    }
    console.log(i)
}