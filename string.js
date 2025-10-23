// String and its methods demonstration
// Strings in JavaScript are used to represent and manipulate text. They are sequences of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

// Creating strings
let singleQuoteStr = 'Hello, World!';
let doubleQuoteStr = "JavaScript is fun.";
let templateLiteralStr = `Template literals allow embedded expressions.`;

// Accessing string characters
console.log(singleQuoteStr[0]); // "H"
console.log(doubleQuoteStr[1]); // "a"
console.log(templateLiteralStr[2]); // "m"
// String methods

// 1. length - Returns the length of the string
console.log(singleQuoteStr.length); // 13

// 2. toUpperCase() - Converts the string to uppercase
console.log(doubleQuoteStr.toUpperCase()); // "JAVASCRIPT IS FUN."

// 3. toLowerCase() - Converts the string to lowercase
console.log(doubleQuoteStr.toLowerCase()); // "javascript is fun."

// 4. indexOf() - Returns the index of the first occurrence of a specified value, or -1 if not found
console.log(singleQuoteStr.indexOf('World')); // 7

// 5. slice() - Extracts a section of the string and returns it as a new string
let slicedStr = singleQuoteStr.slice(0, 5);
console.log(slicedStr); // "Hello"

// 6. replace() - Replaces a specified value with another value in the string
let newStr = doubleQuoteStr.replace('fun', 'awesome');
console.log(newStr); // "JavaScript is awesome."

// 7. split() - Splits the string into an array of substrings based on a specified separator
let strArray = singleQuoteStr.split(', ');
console.log(strArray); // ["Hello", "World!"]

// 8. trim() - Removes whitespace from both ends of the string
let spacedStr = '   Hello, JavaScript!   ';
console.log(spacedStr.trim()); // "Hello, JavaScript!"

// 9. includes() - Checks if the string contains a specified value, returns true or false
console.log(doubleQuoteStr.includes('fun')); // true
console.log(doubleQuoteStr.includes('boring')); // false

// 10. charAt() - Returns the character at a specified index
console.log(singleQuoteStr.charAt(1)); // "e"

// Summary:
// - Strings are sequences of characters used to represent text.
// - They can be created using single quotes, double quotes, or backticks.
// - JavaScript provides various methods to manipulate and interact with strings effectively.