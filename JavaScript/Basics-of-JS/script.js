/* 1️⃣;  Age Category Message – Ask the user for their age. If they are
under 18, print “You are a minor.” If they are between 18 and 60,
print “You are an adult.” If they are above 60, print “You are a
senior citizen.” */

/* var userAge = Number(prompt("Enter your age!"));
if (userAge < 18) {
  console.log("You are a minor");
} else if (userAge >= 18 && userAge <= 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
} */

// === 1st question finish!

/* 2️⃣;  Even or Odd Sum – Take two numbers from the user using
prompt(). If the sum of both numbers is even, print “Even Sum”;
otherwise, print “Odd Sum.”*/

/* var input1 = Number(prompt("Enter your 1st number"));
var input2 = Number(prompt("Enter your 2nd number"));
var sum = input1 + input2;
if (sum % 2 == 0) {
  console.log("Even Sum");
} else {
  console.log("Odd Sum");
}*/

// === 2nd question finish!

/* 3️⃣;  Character Case Checker – Ask the user for a single character. 
Check if it's uppercase, lowercase, or neither (not a letter). */

/* var userInput = prompt("Enter a single character:");
if (userInput.length !== 1) {
  console.log("Enter only a single character.");
} else if (userInput >= "A" && userInput <= "Z") {
  console.log("It is uppercase");
} else if (userInput >= "a" && userInput >= "z") {
  console.log("It is lowercase");
} else {
  console.log("It is neither!");
} */

// === 3rd question finish!

/* 4️⃣;  Largest of Three Numbers – Take three numbers as input and 
print the largest number among them without using 
Math.max(). */

/* 
var num1 = Number(prompt("Enter your first number:"));
var num2 = Number(prompt("Enter your second number:"));
var num3 = Number(prompt("Enter your third number:"));
var array = [num1, num2, num3];
var largestNumber = array[0];

for (let i = 0; i < array.length; i++) {
  if (isNaN(array[i])) {
    console.error("Invalid input! Please enter only numbers.");
  }
  if (largestNumber < array[i]) {
    largestNumber = array[i];
  }
}
console.log("Largest number is:", largestNumber); */

// === 4th question finish!

/* 5️⃣;  Leap Year Checker – Ask the user for a year and determine if 
it's a leap year or not. */

/* 
var isLeapYear = Number(
  prompt("Enter a year to check if it is a leap year or not.")
);

if (isNaN(isLeapYear)) {
  console.error("Invalid Year.");
} else if (isLeapYear % 4 === 0) {
  console.log(true);
} else {
  console.log(false);
} */

// === 5th question finish!

/* 6️⃣;  Simple Calculator – Ask the user for two numbers and an 
operator (+, -, *, /). Perform the operation and display the result. */

/* var num1 = Number(prompt("Enter 1st number for calculation:"));
var operator = String(prompt("Enter any mathimatic operator for calculation:"));
var num2 = Number(prompt("Enter 2nd number for calculation:"));

var result;

if (isNaN(num1) || isNaN(num2)) {
  console.error("Invalid data type!");
} else {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Something went wrong!");
  }
}

if (typeof result === "undefined") {
  console.log();
} else {
  console.log(result);
} */
// === 6th question finish!

/* 7️⃣;  Positive, Negative, or Zero – Take a number input and check if it 
is positive, negative, or zero.*/

/* var inputNum = Number(prompt("Enter a number to check status:"));
if (isNaN(inputNum)) {
  console.log("Invalid data type!");
} else {
  if (inputNum < 0) {
    console.log("Number is Negetive");
  } else if (inputNum == 0) {
    console.log("Number is 0");
  } else {
    console.log("Number is Positive");
  }
} */

// === 7th question finish!

/* 8️⃣;  User Greeting – Ask for the user's name and time (24-hour 
format). Greet them accordingly:
 5 AM–12 PM: "Good Morning, [Name]!"
 12 PM–5 PM: "Good Afternoon, [Name]!"
 5 PM–9 PM: "Good Evening, [Name]!"
 9 PM–5 AM: "Good Night, [Name]!" */

/* var userName = prompt("Enter your name and see Greeting:");
var time = new Date().getHours();
var timeFormat = time % 12 || 12;
var timeZone = time >= 12 ? "PM" : "AM";
var currentTime = timeFormat + " " + timeZone;

if (timeFormat >= 5 && timeFormat < 12 && timeZone == "AM") {
  console.log("Good Morning, ", userName);
} else if (timeFormat >= 12 && timeFormat < 5 && timeZone == "PM") {
  console.log("Good Afternoon, ", userName);
} else if (timeFormat >= 5 && timeFormat < 9 && timeZone == "PM") {
  console.log("Good Evening, ", userName);
} else {
  console.log("Good Night, ", userName);
} */

// === 8th question finish!

/* 9️⃣;  Traffic Light System – Ask the user for a traffic light color (red, yellow, green). Print appropriate messages:
 Red: "Stop!"
 Yellow: "Get Ready!"
 Green: "Go!"*/

var inputColor = prompt("Enter color name of traffic light:").toLowerCase();
if (typeof inputColor !== "string") {
  console.log("Invalid Input");
} else if (inputColor === "red") {
  console.log("Stop!");
} else if (inputColor === "yellow") {
  console.log("Get Ready!");
} else if (inputColor === "green") {
  console.log("Go!");
} else {
  console.log("Invalid Color");
}

// === 9th question finish!
