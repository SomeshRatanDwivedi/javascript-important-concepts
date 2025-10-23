// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is defined and immediately invoked after its creation.

// Example of an IIFE
(function() {
    console.log("This is an IIFE!");
})(); // "This is an IIFE!"

// IIFEs can also accept parameters
(function(name) {
    console.log("Hello, " + name + " from IIFE!");
})("Alice"); // "Hello, Alice from IIFE!"

// IIFEs can return values
let result = (function() {
    return "This is the return value from IIFE!";
})();
console.log(result); // "This is the return value from IIFE!"

// IIFEs are often used to create a new scope and avoid polluting the global namespace
let counter = (function() {
    let count = 0; // private variable
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// Summary:
// - An IIFE is a function that is defined and immediately invoked.
// - It can accept parameters and return values.
// - IIFEs create a new scope, helping to avoid global namespace pollution.
// - They are commonly used for data encapsulation and module patterns.