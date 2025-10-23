// Closures in JavaScript
// A closure is property in js by which an inner function remembers the variable of outer function even after the outer function has finished executing.

// Example of a closure
function outerFunction() {
    let outerVariable = "I'm from outer scope!";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

let closureFunction = outerFunction();
closureFunction(); // "I'm from outer scope!"

// Closures can also accept parameters
function makeMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Closures can be used to create private variables
function createCounter() {
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
}
let counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// Summary:
// - A closure is a function that retains access to its outer scope variables even after the outer function has executed.
// - Closures can accept parameters and return values.
// - They are commonly used for data encapsulation, creating private variables, and implementing function factories.