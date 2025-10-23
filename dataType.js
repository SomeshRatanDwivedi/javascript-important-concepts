//This file give you the info about all the data types in javascript with examples

// JavaScript has 7 primary data types:
// 1. Number
let num = 42;
console.log(typeof num); // "number"  
// Example of floating point
let floatNum = 3.14;
console.log(typeof floatNum); // "number"
// 2. String
let str = "Hello, World!";
console.log(typeof str); // "string"
// Example of template literal
//Template literals allow you to combine variables and expressions within a string using backticks (`) and ${}
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!" 
// 3. Boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"
let isFalse = false;
console.log(typeof isFalse); // "boolean"
// 4. Undefined
let undef;
console.log(typeof undef); // "undefined"   
// 5. Null
let nullVar = null;
console.log(typeof nullVar); // "object" (this is a known quirk in JavaScript)
// 6. Symbol
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"
// 7. BigInt
let bigIntNum = 9007199254740991n;
console.log(typeof bigIntNum); // "bigint"

//JavaScript has 3 non-primitive data types:
// 8. Object
let obj = { key: "value" };
console.log(typeof obj); // "object"
// Example of array
let arr = [1, 2, 3];
console.log(typeof arr); // "object"
// Example of function
let func = function() { return "Hello"; };
console.log(typeof func); // "function"
