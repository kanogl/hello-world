// 20 exercises app

const today = new Date();
  const day = today.getDay();
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dayDate = today.getDate();
  if (dayDate < 10) {
    dayDate = `0${dayDate}`
  }
  let monthDate = (today.getMonth()+1);
  if (monthDate < 10) {
    monthDate=`0${monthDate}`
  }
  const yearDate = today.getFullYear();
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  if (hour===0 && prepand===" PM ")
  {
  if (minute === 0 && second === 0)
  {
    hour=12;
    prepand=" Noon";
  }
  else
  {
    hour=12;
    prepand=" PM";
  }
  }
  if (hour===0 && prepand=== " AM ")
  {
  if (minute===0 && second===0)
  {
    hour=12;
    prepand=" Midnight";
  }
  else
  {
    hour=12;
    prepand= " AM";
  }
  }

function currentTime() {
  document.getElementById("time").innerHTML= `Current Time : ${hour}${prepand} : ${minute} : ${second}`;
}

function timeAsDate() {
  document.getElementById("timeAsDate").innerHTML = dayDate + "/" + monthDate + "/" + yearDate;
}

function printCurrentPage() {
  window.print();
}

function areaOfTriangle(cat1,cat2,hyp) {
  let s = (cat1+cat2+hyp)/2;
  let heightTimesSide = Math.sqrt(s*(s-cat1)*(s-cat2)*(s-hyp));
  let height = (heightTimesSide*2)/cat1;
  let area = (hyp*height)/2;
  console.log(area);

}

areaOfTriangle(4,3,5);

function isLeapYear() {
  let year = prompt("input a year");
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        alert(year + " is a leap year!");
      } else {
        alert(year + " is not a leap year!");
      }
    } else {
      alert(year + " is a leap year!");
    }
  } else {
    alert(year + " is not a leap year");
  }
}

function guessNumber() {
  let userAnswer = prompt("Choose a number between 0 - 10");
  let machineNumber = Math.round(Math.random() * 10);
  console.log(machineNumber);
  if (userAnswer < machineNumber) {
    alert("Try higher");
    userAnswer = prompt("Try again");
  } else if (userAnswer > machineNumber) {
    alert("Try lower");
    userAnswer = prompt("Try again");
  } else if (userAnswer === machineNumber) {
    alert("Great! You guessed it");
  }
  else {
    alert("Better luck next time");
  }
}

function daysUntilChristmas() {
  const christmas = new Date(2018, 11,25);
  console.log(christmas);
  let today = new Date();
  let howMuchUntilChristmas = christmas - today;
  let days = (3600 * 24 * 1000);
  howMuchUntilChristmas = Math.floor(howMuchUntilChristmas / days);
  document.getElementById("christmascountdown").innerHTML = howMuchUntilChristmas;
}

function multiply() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  document.getElementById("answer").innerHTML = value1 * value2;
}

function divide() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  document.getElementById("answer").innerHTML = value1 / value2;;
}

// Celsius to Fahrenheit program
function toCelsius(f) {
  let celsius = ((f-32)/9)*5;
  console.log(celsius);
}
function toFahrenheit(c) {
  let fahrenheit = ((c/5)*9)+32;
  console.log(fahrenheit);
}
toCelsius(140);
toFahrenheit(60);

// Get Website URL

function webURL() {
  alert(document.URL);
}

// Create a variable using a user-defined name

function userFName(x = document.getElementById("userFName").value, y = document.getElementById("value").value) {
  x = y;
  document.getElementById("answer").innerHTML = "Your function is named " + x + " and has a value of " + y;
}

// Getting file extension

function getFileExtension(filename) {
  return filename.split(".").pop();
}

// Check two given numbers and return true if one of the number is 50 or if their sum is 50

function fiftyCents(num1,num2) {
  return ((num1 == 50 || num2 == 50) || (num1 + num2 == 50));
}

// Write a JavaScript program to check a given integer is within 20 of 100 or 400.

function PositiveOrNegative(num1,num2) {
  if (num1 < 0 && num2 < 0) {
    console.log("Both are negative");
  } else if (num1 < 0 || num2 < 0) {
    console.log("One is negative");
  } else if (num1 > 0 && num2 > 0) {
    console.log("Both are positive");
  } else if (num1 > 0 || num2 > 0) {
    console.log("One is positive");
  }
}

// create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

function pyMyString(str) {
  if (str.substring(0,2) === "Py") {
    console.log(str);
  } else {
  let newString = "Py" + str;
  console.log(newString);
  }
}

// create a new string from a given string
// changing the position of first and last characters.

function mutatedStr(str) {
  let firstChar = (str.slice(0,1));
  firstChar.toLowerCase();
  let lastChar = (str.slice(-1));
  lastChar.toUpperCase();
  let newString = lastChar + str.slice(1,-1) + firstChar;
  console.log(newString);
}

// program to check if two given integer values are in the
// range 50..99 (inclusive). Return true if either of them are in the said range

function myRange(start, end) {
  let range = [];
  for (var i = start; i < end; i++) {
    range.push(i);
  }
  range.push(end);
  console.log(range);
}
myRange(50,99);

function bFiftyOrNinety(x,y) {
  if (x >= 50 && x <= 99 || y >= 50 && y <= 99) {
    console.log(true);
  } else {
    console.log(false);
  }
}
