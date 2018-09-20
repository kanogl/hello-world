let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2 - 1]);

myString = "Bats of Hell";
console.log(myString);
console.log("myString is "  +myString.length+ " characters long");
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);

console.log(sequence.pop());

// objects

let day1 = {
  programming: true,
  events: ["breakfast", "gym", "lunch", "hair cut"]
};
console.log(day1.programming);
day1.sex = true;
console.log(day1);
day1.events.sex = true;
console.log(day1);
delete day1.sex;
console.log(day1);
console.log("gym" in day1);
console.log("events" in day1);
console.log(Object.keys(day1));
let objectA = {};
Object.assign(objectA, {a: 1, b: 2, c: 3, d: 4});
console.log(objectA);

// push and pop add and remove elements at the end of an array.
// unshift and shift add and remove elements at the START of the array.

let todoList = [];
function remember(task) {
    todoList.push(task);
  }
function getTask() {
    console.log("Your task now is " +todoList.shift());
  }
function rememberUrgently(task) {
    todoList.unshift(task);
  }

remember("washTeeth");
remember("learnProgramming");
console.log(todoList);
getTask();
rememberUrgently("buyHeroin");
console.log(todoList.indexOf("learnProgramming"));
remember("go to the gym");
remember("get a hair cut");
function taskOrder(task) {
  console.log(todoList.indexOf(task) + 1);
  }
taskOrder("get a hair cut");
console.log(todoList);

// .trim() removes whitespace from both sides of a string (spaces, newlines, tabs and similar characters)

let testingTrimString = "       add lots of spaces   tabs or similar characters          "

console.log(testingTrimString);
console.log(testingTrimString.trim());

// rest & spread

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result)
      result = number;

  }
  return result;
}

console.log(max(4,1,9,-2));

let numbers = [ 3, 5, 1, 99];
console.log(max(...numbers));

console.log(max(9, ...numbers, 202));
console.log(Math.random());
console.log(Math.floor(Math.random()*10));

// exercises
// 1. Write a range function that takes two arguments, start and end,
// and returns an array containing all the numbers from start up to (and including) end.

function rango(start, end, step=1) {
  let rangoFinal = [];
  if (start > end) {
    for (let x = start; x >= end ; x = (x - step)) {
      rangoFinal.push(x);
    }
  } else {
      for (let i = start; i <= end; i += step) {
          rangoFinal.push(i);
        }
      }
      return rangoFinal;
  }

console.log(rango(1,10));

function sumaArrays(array) {
  let sumaTotal = 0;
    for (let i = 0; i < array.length; i++) {
      sumaTotal = array[i] + sumaTotal;
    }
  return sumaTotal;
}
console.log(sumaArrays(rango(1,100)));
console.log(rango(5,2));

// 2. Arrays have a reverse method that changes the array by inverting
// the order in which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
// as argument and produces a new array that has the same elements in the inverse
// order. The second, reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument by reversing its elements.
//Neither may use the standard reverse method.

function reverseArray(arr) {
  let reversedArray = [];
  const aLength = arr.length;
  for (var i = 0; i < aLength; i++) {
    reversedArray.push(arr.pop());
  }
  return reversedArray;
}

console.log(reverseArray(rango(1,10)));

function deepEqual(val1, val2) {
  if (typeof val1 === "object" && val1 != null
   && typeof val2 === "object" && val2 != null) {
    return console.log((Object.keys(val1) === Object.keys(val2)));
  }
  else if (val1 === val2) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

let obj1 = {
  "name": "name"
}

let obj2 = {
  "name": "name"
}

deepEqual(obj1,obj1);
