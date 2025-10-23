// Hoisting in JavaScript
// This file explains the concept of hoisting in JavaScript with examples

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function).

// Example of function hoisting
hoistedFunction(); // "Hello, World!"

function hoistedFunction() {
    console.log("Hello, World!");
}

// Example of variable hoisting
console.log(hoistedVar); // undefined
var hoistedVar = 5;
console.log(hoistedVar); // 5
// Note: Only the declaration is hoisted, not the initialization

// Example of let and const (not hoisted in the same way as var)
console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
let letVar = 10;

console.log(constVar); // ReferenceError: Cannot access 'constVar' before initialization
const constVar = 20;  
// This is due to the "temporal dead zone" for let and const

// Summary:
// - Function declarations are hoisted completely.
// - var declarations are hoisted but initialized with undefined.
// - let and const declarations are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.

//Temporal Dead Zone (TDZ) refers to the time between entering a scope and the point where a variable declared with let or const is initialized. Accessing the variable in this zone results in a ReferenceError.