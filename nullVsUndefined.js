// Null vs Undefined in JavaScript
// This file explains the difference between null and undefined in JavaScript with examples

// Undefined
let undef;
console.log(undef); // undefined

// Null
let nullVar = null;
console.log(nullVar); // null
// Checking types
console.log(typeof undef); // "undefined"
console.log(typeof nullVar); // "object" (this is a known quirk in JavaScript)

// Comparison
console.log(undef == nullVar); // true (loose equality)
console.log(undef === nullVar); // false (strict equality)
// Example usage
function checkValue(value) {
    if (value === undefined) {  
        console.log("Value is undefined");
    } else if (value === null) {
        console.log("Value is null");
    }
} 
checkValue(undef); // "Value is undefined"
checkValue(nullVar); // "Value is null"

// Assigning null to indicate no value
let user = {
    name: "John",
    age: null // age is intentionally set to null
};
console.log(user.age); // null

//Undefined indicates a variable that has been declared but not assigned a value
//Null is an assignment value that represents no value or no object. 