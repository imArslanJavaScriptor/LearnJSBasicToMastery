const Ars = new Object()
// const Ars = {}

Ars.id = "2312123"
Ars.userName = "Muhammad Arslan"
Ars.isLoggedIn = false

console.log(Ars)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: Ars.userName,
            lastname: "King"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


const combinedObject1 = {obj1, obj2, obj4}
const combinedObject2 = Object.assign({}, obj1, obj2, obj4)

console.log(Object.keys(combinedObject1))
console.log(Object.values(combinedObject1))
console.log(combinedObject2)

console.log({...obj1, ...obj2, ...obj4})

const users = [
    {id: 1, email: "h@gmail.com"},
    {id: 2, email: "h@gmail.com"},
    {id: 3, email: "h@gmail.com"},
]


console.log(Object.keys(Ars));
console.log(Object.values(Ars));
console.log(Object.entries(Ars));

console.log(Ars.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Master JS with Arslan",
    courseInstructor: "Arslan",
    price: "999",
}

const {coursename, courseInstructor: InstructorName} = course
console.log(coursename)
console.log(InstructorName)



// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]