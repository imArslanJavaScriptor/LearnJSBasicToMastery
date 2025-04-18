// Custom Promise Example with succes flag
let success = true;
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      console.log("Task is Completed");
      resolve({ name: "Arslan", age: 20, profession: "Software Enginner" });
    } else {
      reject("Operation is Failed");
    }
  }, 1000);
});

// Promise Example 1
promise1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error", err);
  });

// Promise Example 2
const promise2 = new Promise(function (resolve, reject) {
  // Do Async Tasks
  // DB Calls, Cryptography, Network
  setTimeout(function () {
    console.log("Async Task is completed");
    resolve();
  }, 1000);
});

promise2.then(function () {
  console.log("Promise consumed Successfully");
});

// Direct Promise without storing into variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("New Async Task");
    resolve();
  }, 1000);
}).then(function () {
  console.log("This New Async Task Resolved Successfully");
});

// Promise Example 3
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "HM-Arslan", email: "im@Arslan.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
  console.log(user.userName);
});

// Promise Example 4
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Arslan", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log(
      "Proimise Resolved ho ya Reject ho Finally to chalega hi chalega."
    );
  });

// Promise Example 5
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log("Error: ", error);
  }
}

getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))

// 📘 What is Promise.all()?
// Promise.all() is used when you have multiple promises and you
// want to run them in parallel and wait until all of them finish
// (either successfully or any one fails).
// If all succeed → then() block runs with an array of results.
// If any one fails → catch() runs with the error of the first rejected promise.

// Promise.all Example
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise A Resolved");
    }, 1000);
  });
  
  const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise B Resolved");
    }, 1500);
  });
  
  const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise C Resolved");
    }, 500);
  });
  
  Promise.all([promiseA, promiseB, promiseC])
    .then((results) => {
      console.log("All Promises Resolved:");
      console.log(results); // ["Promise A Resolved", "Promise B Resolved", "Promise C Resolved"]
    })
    .catch((err) => {
      console.log("One of the promises failed:", err);
    });
  
// Promise.all with API calls.
const fetch1 = fetch("https://jsonplaceholder.typicode.com/users");
const fetch2 = fetch("https://api.github.com/users/hiteshchoudhary");

Promise.all([fetch1, fetch2])
.then(async ([res1, res2]) => {
    const data1 = await res1.json()
    const data2 = await res2.json()
    console.log("Users From JSON Placeholder:", data1)
    console.log("Github Users:", data2)
})
.catch((error) => {
    console.log("Error in one of the fetch calls:", error)
})