//This file contain the frequently asked coding questions in javascript

//1. Remove all trailing space from the value in object

const nestedObj = {
  a: ' hello ',
  b: {
    c: ' world ',
    d: {
      e: ' nested ',
      f: '   strings   '
    },
    g: ' test '
  },
  h: '   example   '
};

//My solution

function removeSpace(obj) {
  const objKeys = Object.keys(obj);
  if (objKeys.length === 1 && typeof obj[objKeys[0]] === 'string') {
    return { [objKeys[0]]: obj[objKeys[0]].trim() };
  }
  for (let key in obj) {
    if (typeof (obj[key]) === 'string') {
      obj = { ...obj, [key]: obj[key].trim() }
    } else {
      obj = { ...obj, [key]: removeSpace(obj[key]) };
    }
  }
  return obj;
}
console.log(removeSpace(nestedObj))

/**
 * {
  a: 'hello',
  b: { c: 'world', d: { e: 'nested', f: 'strings' }, g: 'test' },
  h: 'example'
}
 * 
 */

//Best solution

function removeSpace(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      acc[key] = value.trim();
    } else if (typeof value === "object" && value !== null) {
      acc[key] = removeSpace(value); // recursive call
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}

//What is the output of this code 
console.log(1);
const promise = new Promise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    console.log("time start");
    resolve("success");
    console.log("time end");
  }, 1000);
  console.log(3);
});
promise.then((res) => console.log(res));
console.log(4);

/**
 *1
  2
  3
  4
  time start
  time end
  success
 */


//What is the output of this code
var a;
for (a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a)
  }, 0)
}


// 6
// 6
// 6
// 6
// 6

//Because var is global scoped so it will increment same variable in every loop


//What is the output of this code
for (var a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a)
  }, 0)
}

// 6
// 6
// 6
// 6
// 6

//Same reason as previous a is not created for every loop

//What is the output of this code
let a;
for (a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a)
  }, 0)
}
// 6
// 6
// 6
// 6
// 6

//Same reason since a is declared before the loop so same variable will be inremented every time;

//What is the output of this code

for (let a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a)
  }, 0)
}

// 1
// 2
// 3
// 4
// 5

//Now since let is block scoped and defined in loop so it will create new variable in every loop, so it will print different value for every loop


//What is the output of this code

for (let a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a)
  }, 0)
}


// /ERROR!
//   / tmp / PSQNS6KVib / main.js: 4
// for (const a = 1; a <= 5; a++) {
//                          ^

//     TypeError: Assignment to constant variable.

//Flatten the array
//Input - const arr=[1, [2, [3]],[5,[6,[7,8,9]]],10];
//Output - [1, 2, 3, 5, 6,  7, 8, 9, 10]

//My solution 1

function flatArr(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flatenArr = flatArr(arr[i]);
      newArr.push(...flatenArr)
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(flatArr(arr))

// My solution 2

function flatArrWithReduce(arr) {
  return arr.reduce((acc, currEle) => {
    if (Array.isArray(currEle)) {
      const flatArr = flatArrWithReduce(currEle);
      acc.push(...flatArr);
    } else {
      acc.push(currEle);
    }
    return acc;
  }, [])
}

console.log(flatArrWithReduce(arr));

// Best solution

const flatten = arr => arr.reduce((acc, val) =>
  Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);

console.log(flatten(arr)); // [1, 2, 3]




// Online Javascript Editor for free // Write, Edit and Run your Javascript code using JS Online Compiler 
// You are to implement a function scheduler with a delay and a maximum number of concurrent executions. 
// example
/*
scheduler([
  () => task(1000, 'A'),
  () => task(500, 'B'),
  () => task(300, 'C'),
  () => task(400, 'D')
], 2);

*/

// Output order based on time and concurrency: // After 0ms: A, B start // After 500ms: B completes, C starts // After 1000ms: A completes, D starts

function task(delay, name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} completed after ${delay}ms`);
      resolve();
    }, delay);
  });
}

async function scheduler(tasks, maxConcurrent) {
  let running = 0;
  let index = 0;

  return new Promise((resolve) => {
    const results = [];

    function runNext() {
      // Finished all tasks and none running
      if (index === tasks.length && running === 0) {
        resolve(results);
        return;
      }

      // While we have capacity to run new tasks
      while (running < maxConcurrent && index < tasks.length) {
        const currentTaskIndex = index;
        const taskFn = tasks[currentTaskIndex];
        index++;
        running++;
        console.log(`Starting: ${taskFn.name}`);

        taskFn().then((res) => {
          running--;
          results.push(res);
          runNext(); // trigger next task when one completes
        });
      }
    }

    runNext();
  });
}


// Testing the scheduler
scheduler([
  () => task(1000, 'A'),
  () => task(500, 'B'),
  () => task(300, 'C'),
  () => task(400, 'D')
], 2);



//Shallow copy and deep copy

//✅ 1) Using = (NOT a copy – just reference)
const original = { name: "Sam", skills: ["JS", "React"] };

const copy = original; // same reference

copy.name = "John";
copy.skills.push("Node");

console.log(original);
// Output: { name: "John", skills: ["JS", "React", "Node"] }

//✅ 2) Shallow Copy
//Shallow copy copies only 1 level. Nested objects/arrays still share reference.

const original = { name: "Sam", skills: ["JS", "React"] };

const shallowCopy = { ...original };

shallowCopy.name = "John";          // safe
shallowCopy.skills.push("Node");    // affects original

console.log(original.skills);
// Output: ["JS", "React", "Node"]


//✅ 3) Deep Copy using JSON.stringify + JSON.parse
// Copies nested objects too ✅

const original = { name: "Sam", skills: ["JS", "React"] };

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.skills.push("Node");

console.log(original.skills);
// Output: ["JS", "React"]  ✅ not changed
console.log(deepCopy.skills);
// Output: ["JS", "React", "Node"]

/*
✅ Completely separate
⚠️ Won’t work for:
functions
dates
undefined
circular references
*/


// ✅ 4) Deep Copy using Lodash _.cloneDeep()
//Works with everything (best method)

import _ from "lodash";

const original = { 
  name: "Sam", 
  skills: ["JS", "React"],
  address: { city: "Delhi" },
  joinDate: new Date()
};

const deepCopy = _.cloneDeep(original);

deepCopy.skills.push("Node");
deepCopy.address.city = "Mumbai";

console.log(original.address.city); // "Delhi" ✅ safe
console.log(deepCopy.address.city); // "Mumbai"

/*
Here are simple, clear examples showing how JSON.stringify → JSON.parse fails for:
✅ functions
✅ dates
✅ undefined
✅ circular references

*/
//✅ 1) Functions are removed
const original = {
  name: "Sam",
  sayHello: function () { console.log("Hello"); }
};

const copy = JSON.parse(JSON.stringify(original));

console.log(copy);
// Output: { name: "Sam" }   ✅ function is gone!


//❌ Functions are not valid JSON → they disappear.

//✅ 2) Dates turn into strings
const original = {
  name: "Sam",
  joinDate: new Date("2023-01-01")
};

const copy = JSON.parse(JSON.stringify(original));

console.log(typeof original.joinDate); // object (Date)
console.log(typeof copy.joinDate);     // string  ❌ lost the Date object

console.log(copy);
// Output: { name: "Sam", joinDate: "2023-01-01T00:00:00.000Z" }


//❌ Date becomes just a plain string, not a Date object anymore.

//✅ 3) Undefined values are removed
const original = {
  name: "Sam",
  age: undefined
};

const copy = JSON.parse(JSON.stringify(original));

console.log(copy);
// Output: { name: "Sam" }   ✅ "age" removed completely


//❌ JSON has no undefined, so the key disappears.

//✅ 4) Circular reference causes error
const original = { name: "Sam" };
original.self = original; // circular reference

JSON.stringify(original);
// ❌ TypeError: Converting circular structure to JSON


//Because original.self points back to original, JSON cannot convert it.
