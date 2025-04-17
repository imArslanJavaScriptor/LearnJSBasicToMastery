const myNums = [100, 200, 400]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`Accumulator: ${acc} and Current Value: ${currval}`);
    return acc + currval
}, 0) // Here we set the default value of Accumulator to 0

const reducedValue = myNums.reduce((acc, currVal) => acc +currVal, 0)

console.log("MyTotal:", myTotal);
console.log("reducedValue:", reducedValue );


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice  = shoppingCart.reduce((acc, currItem) => acc + currItem.price, 0)

console.log("Your Total:", totalPrice)