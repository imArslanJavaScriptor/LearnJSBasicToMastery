// 1: Basic Syntax
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

const winnerName = "Arslan"
switch (winnerName) {
    case "Arslan":
        console.log("Arslan is the Winner")
        break;
    case "Shan": 
    console.log("Shan is the winner")
    break
    default:
        console.log("Not Found")
        break;
}

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}