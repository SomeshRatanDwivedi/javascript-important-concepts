// Currying in JavaScript
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

// Example of a curried function
function add(a) {
    return function(b) {
        return a + b;
    };
}

let add5 = add(5);
console.log(add5(10)); // 15

// Currying with arrow functions
const multiply = (x) => (y) => x * y;
let multiplyBy3 = multiply(3);
console.log(multiplyBy3(4)); // 12

// Currying can also be implemented for functions with more than two arguments
function volume(length) {
    return function(width) {
        return function(height) {
            return length * width * height;
        };
    };
}

let volumeOfBox = volume(2)(3)(4);
console.log(volumeOfBox); // 24

// Currying can be useful for creating specialized functions
const curriedGreeting = (greeting) => (name) => `${greeting}, ${name}!`;
const sayHello = curriedGreeting("Hello");
console.log(sayHello("Alice")); // "Hello, Alice!"  
const sayHi = curriedGreeting("Hi");
console.log(sayHi("Bob")); // "Hi, Bob!"


//Practical example: Currying for configuration
const configure = (setting1) => (setting2) => (setting3) => {
    return `Configuration: ${setting1}, ${setting2}, ${setting3}`;
};

const config = configure("dark mode")("en-US")("metric");
console.log(config); // "Configuration: dark mode, en-US, metric"

const lightModeConfig = configure("light mode")
console.log(lightModeConfig("fr-FR")("imperial")); // "Configuration: light mode, fr-FR, imperial"
console.log(lightModeConfig("es-ES")("metric")); // "Configuration: light mode, es-ES, metric"


// Summary:
// - Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument.
// - It can be implemented using regular functions or arrow functions.
// - Currying is useful for creating specialized functions by pre-filling some arguments.