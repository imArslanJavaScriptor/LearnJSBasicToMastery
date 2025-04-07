const accountId = 1452290
let accountEmail = "Arslan@google.com"
var accountPassword = "1234590@00"
accountCity = "Lahore"



// accountId = 2323232101 // Not Allowed
accountEmail = "Ar@ar.com"
accountPassword = "123243@90"
accountCity = "Lahore Punjab Pakistan"

console.log(accountId)
console.table([accountEmail, accountPassword, accountCity])

/*
Prefer not to use var because of issue
in block scope & function scope.
*/