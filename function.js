// Function Declarations
// A function declaration defines a named function that can be called anywhere in the scope it is defined.

// Example of a function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// Function declarations are hoisted, meaning they can be called before they are defined in the code
console.log(multiply(4, 5)); // 20
function multiply(x, y) {
    return x * y;
}

// Function declarations can have default parameters
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"

// Function declarations can also use rest parameters to handle an indefinite number of arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
} 

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7, 8)); // 30

// Summary:
// - Function declarations define named functions that can be called in their scope.
// - They are hoisted, allowing them to be called before their definition.
// - They can have default parameters and rest parameters for flexibility in argument handling.