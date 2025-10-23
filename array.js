// Array and its methods demonstration

//Array in JavaScript is a special type of object used to store multiple values in a single variable. Arrays are ordered collections of items that can be of any data type. But array typically contains items of the same type.

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Accessing array elements
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Cherry"


// Modifying array elements
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// Array methods

// 1. push() - Adds one or more elements to the end of an array
fruits.push("Date");
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date"]

// 2. pop() - Removes the last element from an array
let lastFruit = fruits.pop();
console.log(lastFruit); // "Date"
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// 3. shift() - Removes the first element from an array
let firstFruit = fruits.shift();
console.log(firstFruit); // "Apple"
console.log(fruits); // ["Blueberry", "Cherry"]


// 4. unshift() - Adds one or more elements to the beginning of an array
fruits.unshift("Apricot");
console.log(fruits); // ["Apricot", "Blueberry", "Cherry"]

// 5. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
let index = fruits.indexOf("Cherry");
console.log(index); // 2

// 6. splice() - Adds/Removes elements from an array
// Removing 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // ["Apricot", "Cherry"]

// Adding elements at index 1
fruits.splice(1, 0, "Blueberry", "Date");
console.log(fruits); // ["Apricot", "Blueberry", "Date", "Cherry"]

// 7. slice() - Returns a shallow copy of a portion of an array into a new array object

//current array: ["Apricot", "Blueberry", "Date", "Cherry"]
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); // ["Blueberry", "Date"]

// 8. forEach() - Executes a provided function once for each array element
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});
// Output:
// 0: Apricot
// 1: Blueberry
// 2: Date
// 3: Cherry

// 9. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits); // ["APRICOT", "BLUEBERRY", "DATE", "CHERRY"]

// 10. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let longNamedFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});

console.log(longNamedFruits); // ["Blueberry", "Cherry"]


//11. find() - Returns the value of the first element in the array that satisfies the provided testing function
let foundFruit = fruits.find(function(fruit) {
    return fruit.startsWith("D");
});
console.log(foundFruit); // "Date"

//12. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let totalLength = fruits.reduce(function(total, fruit) {
    return total + fruit.length;
}, 0);
console.log(totalLength); // 22 // (lengths: Apricot(7) + Blueberry(10) + Date(4) + Cherry(6) = 27)

//13. sort() - Sorts the elements of an array in place and returns the sorted array
fruits.sort();
console.log(fruits); // ["Apricot", "Blueberry", "Cherry", "Date"]

//14. reverse() - Reverses the order of the elements in an array in place
fruits.reverse();
console.log(fruits); // ["Date", "Cherry", "Blueberry", "Apricot"]

//15. concat() - Merges two or more arrays and returns a new array
let tropicalFruits = ["Mango", "Pineapple"];
let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); // ["Date", "Cherry", "Blueberry", "Apricot", "Mango", "Pineapple"]

//16. join() - Joins all elements of an array into a string
let fruitString = fruits.join(", ");
console.log(fruitString); // "Date, Cherry, Blueberry, Apricot"

//17. flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

//18. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate
console.log(fruits.includes("Cherry")); // true
console.log(fruits.includes("Banana")); // false
  

// Summary:
// - Arrays are used to store multiple values in a single variable.
// - JavaScript provides various methods to manipulate arrays, such as push, pop, shift, unshift, splice, slice, forEach, map, and filter.
// - Understanding these methods helps in effectively managing and utilizing arrays in JavaScript programming.