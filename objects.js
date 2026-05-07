// Objects in JavaScript are collections of key-value pairs. They are used to store and manage data in a structured way.
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing object properties
console.log(person.name); // "John"
console.log(person['age']); // 30

// Modifying object properties
person.age = 31;
console.log(person.age); // 31

// Adding new properties
person.country = "USA";
console.log(person.country); // "USA"

// Deleting properties
delete person.city;
console.log(person.city); // undefined

// Object methods
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
};

console.log(car.getCarInfo()); // "2020 Toyota Camry"

// Summary:
// - Objects are key-value pairs used to store data.
// - Properties can be accessed and modified using dot notation or bracket notation.
// - Objects can also contain methods, which are functions associated with the object.

//Note:
// 1. In JavaScript, arrays and functions are also considered objects.
// 2. You can not create an object with key starting with number or special characters except _ and $.
// example: let obj = {1name: "test"}; // This will throw an error
// 3. Object keys are always strings or symbols. If you use a different data type as a key, it will be converted to a string.
let exampleObj = {
    1: "one",
    2: "two",
    3: "three"
};

console.log(exampleObj["1"]); // "one"

// 4. You can use variables as keys in object literals using computed property names.
let key = "two";
console.log(exampleObj[key]); // "two"

// 5. Objects are mutable, meaning their properties can be changed even if the object is declared with const.
const mutableObj = {
    prop: "initial value"
};
mutableObj.prop = "new value";
console.log(mutableObj.prop); // "new value"

// 6. You can use Object.keys(), Object.values(), and Object.entries() to get arrays of an object's keys, values, or key-value pairs respectively.
console.log(Object.keys(person)); // ["name", "age", "country"]
console.log(Object.values(person)); // ["John", 31, "USA"]
console.log(Object.entries(person)); // [["name", "John"], ["age", 31], ["country", "USA"]]

// 7. You can use Object.assign() to copy properties from one or more source objects to a target object.
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// 8. You can use the spread operator (...) to create a shallow copy of an object or to merge multiple objects.
//shallow copy means only the first level is copied, nested objects are still referenced
let original = { x: 10, y: 20 };
let copy = { ...original };
console.log(copy); // { x: 10, y: 20 }

let merged = { ...original, z: 30 };
console.log(merged); // { x: 10, y: 20, z: 30 }
// Note: Changes to nested objects in the original will affect the copy
original.nested = { a: 1 };
let shallowCopy = { ...original };
original.nested.a = 2;
console.log(shallowCopy.nested.a); // 2

//Note: To deep copy an object, you can use structuredClone() method (available in modern browsers) or JSON methods for simple objects.
// Example using structuredClone (uncomment the following lines if your environment supports it)
// let deepCopy = structuredClone(original);
// original.nested.a = 3;
// console.log(deepCopy.nested.a); // 2


// 9. You can check if a property exists in an object using the 'in' operator or the hasOwnProperty() method.
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true

// 10. You can iterate over an object's properties using a for...in loop.
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Output:
// name: John
// age: 31
// country: USA

// 11. You can freeze an object using Object.freeze() to prevent any modifications to its properties.
let frozenObj = {
    prop1: "value1",
    prop2: "value2"
};
Object.freeze(frozenObj);

// Attempting to modify a frozen object
frozenObj.prop1 = "newValue";
console.log(frozenObj.prop1); // "value1"

// 12. You can seal an object using Object.seal() to prevent adding or removing properties, but you can still modify existing properties.
let sealedObj = {
    propA: "A",
    propB: "B"
};
Object.seal(sealedObj);

// Attempting to add a new property
sealedObj.propC = "C";
console.log(sealedObj.propC); // undefined

// Attempting to modify an existing property
sealedObj.propA = "New Value A";
console.log(sealedObj.propA); // "New Value A"

// 13. You can define getters and setters in an object to control access to its properties.
let user = {
    firstName: "Jane",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
};
console.log(user.fullName); // "Jane Doe"
user.fullName = "Alice Smith";
console.log(user.firstName); // "Alice"
console.log(user.lastName); // "Smith"

/*In JavaScript, every object has a built-in property called its Prototype.

Think of a prototype as a "Parent" or a "Blueprint" that an object can fall back on. If you try to access a property or a method that doesn't exist on the object itself, JavaScript will look for it in the prototype.

1. The Prototype Chain
This is the mechanism for Inheritance in JavaScript. When you look for a property:

JS looks at the Object itself.

If not found, it looks at the Object's Prototype.

If not found there, it looks at the Prototype's Prototype.

This continues until it reaches null (the end of the chain).

2. Why do we need it? (Memory Efficiency)
Imagine you have 1,000 Vehicle objects. If each object has its own startEngine function, you are creating 1,000 copies of that function in memory.

By using the Prototype, you create the function once, and all 1,000 objects share it.

JavaScript
function Vehicle(name) {
  this.name = name;
}

// Adding a method to the prototype
Vehicle.prototype.startEngine = function() {
  console.log(`${this.name} is roaring!`);
};

const tractor = new Vehicle("John Deere 8R");
const harvester = new Vehicle("X9 Combine");

tractor.startEngine();   // Found in prototype
harvester.startEngine(); // Shares the SAME function in memory
3. __proto__ vs prototype
This is a very common interview question.

prototype: This is a property on Constructor Functions. It is the blueprint used to build the objects.

__proto__: This is a property on Instances (the objects created). it points to the prototype of the function that created it.

John Deere Tip: If you use ES6 Classes (which they likely do), the class syntax is just "syntactic sugar" over this prototype system. When you define a method inside a class, JavaScript is actually attaching it to the prototype behind the scenes.

4. Prototypal Inheritance vs. Classical Inheritance
Classical (Java/C++): Classes are blueprints, and objects are copies. You can't change the blueprint at runtime.

Prototypal (JavaScript): Objects are linked to other objects. You can add a method to Vehicle.prototype at any time, and every vehicle in your app—even the ones already created—will instantly have access to it.

Summary Answer for your Interview:
"A prototype is a mechanism by which JavaScript objects inherit features from one another. Every object has a private property which holds a link to another object called its prototype. This creates a Prototype Chain. It is essential for performance because it allows multiple objects to share the same methods and properties without duplicating them in memory."*/
