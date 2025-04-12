// Immediately Invoked Function Expressions (IIFE)

// ✅ Corrected Named Function IIFE 
(function greeting() {
    console.log( "Welcome Back To Heaven Sir")
})();

// ✅ Corrected Arrow Function IIFE
(() => (
    console.log("DB Connected:: Successfully")
))();


// ❌ Invalid: IIFE can't start with `let`
// IIFE should be wrapped in parentheses and executed directly.
// There is no need to hold its reference in a variable.
/*
(let newDBConnection = () => {
    console.log("New DB Connection Succeed");
})()
*/

// ✅ Corrected Arrow Function IIFE
(() => {
    console.log("New DB Connection Succeeded");
})();