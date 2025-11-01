//This key word in JavaScript
// The "this" keyword refers to the object it belongs to.
// It has different values depending on where it is used.

// 1. In a method, "this" refers to the owner object.
let person = {
  firstName: "Alice",
  lastName: "Smith",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // "Alice Smith"

// 2. Alone, "this" refers to the global object (window in browsers, global in Node.js).
console.log(this); // In browser: Window {...}

// 3. In a function, "this" refers to the global object (in non-strict mode) or undefined (in strict mode).
function showThis() {
  console.log(this);
}

showThis(); // In browser: Window {...} (non-strict mode)

// 4. In an event, "this" refers to the element that received the event.
document.getElementById("myButton").addEventListener("click", function() {
  console.log(this); // The button element
});

// 5. In arrow functions, "this" retains the value of the enclosing lexical context's "this".
let obj = {
  value: 42,
  arrowFunc: () => {
    console.log(this.value);
  } 
};

obj.arrowFunc(); // undefined, because "this" refers to the global object

// 6. You can explicitly set "this" using call(), apply(), and bind() methods.
function greet() {
  return "Hello, " + this.name;
}

let user = { name: "Bob" };
console.log(greet.call(user)); // "Hello, Bob"
console.log(greet.apply(user)); // "Hello, Bob"
let boundGreet = greet.bind(user);
console.log(boundGreet()); // "Hello, Bob"

//Note: There are 4 rules to determine the value of "this":
// 1. Default Binding: In a regular function call, "this" refers to the global object (or undefined in strict mode).
// 2. Implicit Binding: When a function is called as a method of an object, "this" refers to that object.
// 3. Explicit Binding: Using call(), apply(), or bind() to set "this" explicitly.
// 4. New Binding: When a function is used as a constructor with the "new" keyword, "this" refers to the newly created object.



//Example of Default Binding
function defaultThis() {
  console.log(this);
}
defaultThis(); // In browser: Window {...} (non-strict mode)

//Example of Implicit Binding
let car = {
  brand: "Toyota",
  getBrand: function() {
    return this.brand;
  }
};
console.log(car.getBrand()); // "Toyota"

//Example of Explicit Binding
function showName() {
  return this.name;
}

let admin = { name: "Admin" };
console.log(showName.call(admin)); // "Admin"
console.log(showName.apply(admin)); // "Admin"
console.log(showName.bind(admin)()); // "Admin"

// Example of New Binding
function Person(name) {
  this.name = name;
}
let newUser = new Person("Charlie");
console.log(newUser.name); // "Charlie"


//Ex of call apply bind with parameters

function greet(a, b) {
  return `${this.name} is cooking ${a} and ${b}`;
}

let user = { name: "Bob" };
 console.log(greet.call(user,"rice", "dal")); // Bob is cooking rice and dal
 console.log(greet.apply(user,["rice", "dal"])); // Bob is cooking rice and dal
let boundGreet = greet.bind(user,"rice", "dal");
 console.log(boundGreet()); // Bob is cooking rice and dal

// Summary:
// - "this" refers to the object it belongs to.
// - Its value depends on the context in which it is used (method, function, event, arrow function).
// - You can explicitly set "this" using call(), apply(), and bind() methods.
