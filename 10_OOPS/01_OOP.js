const user = {
  userName: "Arslan",
  loginStatus: true,
  loginDevice: "Computer",

  getUserDetails: function() {
    console.log(`Got User Details`)
    console.log(`UserName: ${this.userName}`)
    console.log(this)
  }
}

// user.getUserDetails()

function UserInfo(userName, loginStatus, userLocation) {
  this.userName = userName;
  this.loginStatus = loginStatus
  this.userLocation = userLocation

  this.welcomeUser = function() {
    console.log(`Welcome ${this.userName}`)
  }

  // return [userName, loginStatus, userLocation]
}
// console.log(UserInfo("Arslan", true, "Lahore"))

// With or Without New Keyword
const funcOne = UserInfo("Arslan", true, 'Karachi')
const funcTwo = new UserInfo("Arslan", true, 'London')

console.log(funcOne)
console.log(funcTwo)
console.log(UserInfo.constructor);