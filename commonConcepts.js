// Common Concepts in JavaScript

// Scope - Refers to the current context of code, which determines the accessibility of variables. JavaScript has three types of scope: global, function, and block scope.

// Example of Global Scope
var globalVar = "I am global";


function checkGlobalScope() {
    console.log(globalVar); // Accessible here
}

checkGlobalScope();
console.log(globalVar); // Accessible here

// Example of Function Scope
function functionScope() {
    var funcVar = "I am local to this function";
    console.log(funcVar); // Accessible here
} 
functionScope();
// console.log(funcVar); // Unaccessible here, would throw ReferenceError

// Example of Block Scope
function blockScope() {
  const isChecked = true; // Block scoped variable
  if (isChecked) {
      let blockVar = "I am local to this block";
      console.log(blockVar); // Accessible here
  }
  // let blockVar = "I am local to this block";
  // console.log(blockVar); // Unaccessible here, would throw ReferenceError
}
blockScope();
// console.log(blockVar); // Unaccessible here, would throw ReferenceError
// Note: Variables declared with var do not have block scope, only function scope.


//Execution Context - The environment in which JavaScript code is executed. It consists of the variable object, scope chain, and 'this' keyword.

function executionContextExample() {
    var localVar = "I am local to this function";
    console.log(localVar); // Accessible here
}
executionContextExample();
// console.log(localVar); // Unaccessible here, would throw ReferenceError
// When the function is called, a new execution context is created for it, which includes its own variable object containing localVar.

//Call Stack - A stack data structure that keeps track of function calls in the program. When a function is invoked, a new execution context is created and pushed onto the call stack. When the function completes, its execution context is popped off the stack.

function firstFunction() {
    console.log("First Function");
    secondFunction();
}

function secondFunction() {
    console.log("Second Function");
}
firstFunction();
// Call Stack sequence:
// 1. Global Execution Context is created and firstFunction is called.
// 2. firstFunction's Execution Context is created and pushed onto the Call Stack.
// 3. secondFunction's Execution Context is created and pushed onto the Call Stack.
// 4. secondFunction completes and its Execution Context is popped off the Call Stack.
// 5. firstFunction completes and its Execution Context is popped off the Call Stack.

// Summary:
// - Scope determines the accessibility of variables.
// - Execution Context is the environment in which code is executed.
// - Call Stack keeps track of function calls and their execution contexts.