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