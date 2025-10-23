// Function Expressions
// A function expression is created when a function is assigned to a variable.

// Example of a function expression
const greet = function(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Alice")); // "Hello, Alice!"

// Function expressions can be anonymous (as above) or named
const farewell = function goodbye(name) {
    return "Goodbye, " + name + "!";
};

console.log(farewell("Bob")); // "Goodbye, Bob!"
// Note: The name "goodbye" is only accessible within the function itself

// Function expressions are not hoisted, so they cannot be called before they are defined
// Uncommenting the following line would result in a TypeError
// console.log(sayHi("Charlie")); // TypeError: sayHi is not a function
const sayHi = function(name) {
    return "Hi, " + name + "!";
};
console.log(sayHi("Charlie")); // "Hi, Charlie!"
// Function expressions can also be used as arguments to other functions (callbacks)
function processUserInput(callback) {
    const name = "David";
    console.log(callback(name));
}
processUserInput(greet); // "Hello, David!"
processUserInput(farewell); // "Goodbye, David!"
// Summary:
// - Function expressions are created when a function is assigned to a variable.
// - They can be anonymous or named.
// - Function expressions are not hoisted, meaning they cannot be called before they are defined.
// - They can be used as arguments to other functions.
// - They are hoisted only when using var, but the variable is initialized with undefined until the assignment is evaluated.
// Note: Function expressions are different from function declarations, which are hoisted and can be called before they are defined.