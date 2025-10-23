/*🧠 Top JavaScript Interview Topics & Questions(with short hints)


🔹 1. Scopes, Hoisting & Closures

These are the most common JS interview questions.

Difference between var, let, and const

  What is hoisting? (and what gets hoisted ?)

What are closures and how do they work ?
→ (Create a function inside another and access parent variables)

What is lexical scope ?

  Difference between global, functional, and block scope

What’s the output of this ?

for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);


How to fix closure issues in loops ?

🔹 2. Event Loop, Microtasks, Macrotasks

These test async understanding(like your Promise + setTimeout question).

Explain the JavaScript event loop.

Difference between microtask and macrotask queue.

  Output:

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
console.log(4);


Why do Promise callbacks run before setTimeout ?

  What is the order of execution between async / await, promises, and setTimeout ?

🔹 3. Promises, Async / Await

What is a Promise and its states ?

  Difference between.then chaining and async / await

Error handling in async functions(try/catch vs .catch())

Convert callback - based code to Promises

What happens when you await inside a loop ?

🔹 4. Objects & Arrays(Core logic)

Deep vs shallow copy in JavaScript

How to clone an object(spread, Object.assign, structuredClone)

Remove duplicate values from an array

Flatten a nested array([1, [2, [3]]] →[1, 2, 3])

Write a recursive function to modify nested objects
  (like your removeSpace example)

Difference between for...in and for...of

Why is typeof null === 'object' ?

🔹 5. Functions

What is the difference between:

Regular function

  Arrow function

  What’s the difference between call, apply, and bind ?

    What is currying in JavaScript ?

      Explain higher - order functions.

What is debounce and throttle, and where are they used ?

🔹 6. This Keyword

What is this in JavaScript ?

  How does this behave in:

Regular function

  Arrow function

  Method call

Event handler

How can you change the value of this ? (call, apply, bind)

Output questions like:

const obj = {
  name: "Somesh",
  greet: () => console.log(this.name)
};
obj.greet();

🔹 7. Prototypes & Classes

Explain prototypal inheritance.

What is the difference between class and prototype in JS ?

  How to create inheritance manually(before ES6) ?

    What is the prototype chain ?

      Output questions:

function A() { }
A.prototype.x = 10;
const b = new A();
console.log(b.x);

🔹 8. Type Coercion & Equality

Difference between == and ===

  What’s the output:

[] + []; // ?   ''
[] + {}; // ?   [object Object]
{ } +[]; // ?   [object Object]


Truthy and falsy values in JS

How does NaN === NaN behave ?

🔹 9. ES6 + Features

Destructuring, default parameters, spread / rest

What are generators and iterators ?

  Difference between import/export and require

What are symbols ?

  Explain optional chaining and nullish coalescing(?., ??)

🔹 10. Practical & Logic - Based

These are common in coding rounds or real - time interviews.

Implement a custom map() or filter() function

  Polyfill for Promise.all()

Implement debounce or throttle

Flatten a deeply nested object

Find the output of async + loop code

Deep compare two objects

Write a memoization function

  Convert an object to query string and back

💼 Bonus — Frontend - Specific JS Questions

What is the difference between:

null vs undefined

  == vs ===

  undefined vs not defined

Event bubbling & capturing

What are web APIs ?

  Difference between synchronous and asynchronous JS

What is the difference between localStorage, sessionStorage, and cookies ?

*/