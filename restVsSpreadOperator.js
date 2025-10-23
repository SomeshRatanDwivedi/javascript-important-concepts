//This file explains the difference between rest and spread operators in JavaScript with examples

// Spread Operator
// The spread operator (...) allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected.

// Example with arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

// Example with function arguments
function sum(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Example with objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Rest Operator
// The rest operator (...) allows a function to accept an indefinite number of arguments as an array.
function multiply(factor, ...args) {
    return args.map(num => num * factor);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
console.log(multiply(3, 4, 5)); // [12, 15]

// Example with destructuring
let [first, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(rest); // [20, 30, 40, 50]

//Summary:
//Rest operator puts the rest of the some specific user supplied value into javascript array
//Spread opertaor syntax expands iterable into a individual elements.