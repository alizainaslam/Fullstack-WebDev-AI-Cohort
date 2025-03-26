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

/* var inputColor = prompt("Enter color name of traffic light:").toLowerCase();
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
} */

// === 9th question finish!

/* 1️⃣0️⃣;  Multiplication Table – Ask the user for a number and print its 
multiplication table up to 10. */

/* var userNumber = Number(prompt("Enter a number for multiplication table:"));
if (isNaN(userNumber)) {
  console.log("Invalid Data!");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(userNumber + " * " + i + " = " + i * userNumber);
  }
} */

// === 10th question finish!

/* 1️⃣1️⃣;  Grade Calculator – Ask the user for their marks (0-100). 
Assign grades based on the range:
 90-100: A
 80-89: B
 70-79: C
 60-69: D
 Below 60: F */

/* var userMarks = Number(prompt("Enter your marks for checking grades:"));
if (isNaN(userMarks) || userMarks > 100 || userMarks < 0) {
  console.log("Invalid Marks");
} else if (userMarks >= 90 && userMarks <= 100) {
  console.log("Grade A");
} else if (userMarks >= 80 && userMarks <= 89) {
  console.log("Grade B");
} else if (userMarks >= 70 && userMarks <= 79) {
  console.log("Grade C");
} else if (userMarks >= 60 && userMarks <= 69) {
  console.log("Grade C");
} else {
  console.log("FAIL");
} */

// === 11th question finish!

/* 1️⃣2️⃣;  Simple Login System – Set a predefined username and 
password. Ask the user to enter their credentials using 
prompt(). If correct, print “Login Successful”; otherwise, print 
“Incorrect username or password.” */

/* const definedUserName = prompt(
  "Enter user name : username is ali;"
).toLowerCase();
const definedUserPassword = prompt(
  "Enter password : password is ali123;"
).toLowerCase();

const userInputName = "Ali".toLowerCase();
const userInputPassword = "ali123";

if (
  userInputName !== definedUserName ||
  userInputPassword !== definedUserPassword
) {
  console.log("ncorrect username or password");
} else {
  console.log("Login Successful");
} */

// === 12th question finish!

/* 1️⃣3️⃣;  Swapping Without Third Variable – Take two numbers from the 
user and swap their values without using a third variable. */

/* let num1 = 18;
let num2 = 20;
[num1, num2] = [num2, num1];
console.log(num1, num2); */

// === 13th question finish!

/* 1️⃣4️⃣;  FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if only 5, print “Buzz”; otherwise, print the number itself.*/

/* const userNumber = 15;

if (isNaN(userNumber)) {
  console.log("Invalid Number!");
} else if (userNumber % 3 === 0 && userNumber % 5 === 0) {
  console.log("FizzBuzz");
} else if (userNumber % 3 === 0) {
  console.log("Fizz");
} else if (userNumber % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(userNumber);
} */

// === 14th question finish!

/* 1️⃣5️⃣;  Number Reversal – Take a three-digit number from the user 
and print its reverse. (Example: 123 → 321). */

/* 
let userInput = 123;
let arr = String(userInput).split("");
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i]);
}
console.log(result.join("")); */

// === 15th question finish!

/* 1️⃣6️⃣;  Sum of Digits – Take a number from the user and print the sum 
of its digits. (Example: 123 → 1+2+3 = 6).*/

/* let userInput = 123;
let arr = String(userInput).split("");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let num = Number(arr[i]);
  sum += num;
}
console.log(sum); */

// === 16th question finish!

/* 1️⃣7️⃣;  Palindrome Checker – Ask the user for a word. Check if it 
reads the same forward and backward. Print “Palindrome” or 
“Not a Palindrome.” */

/* const inputWord = String("Civic").toLowerCase();
let reverseWord = inputWord.split("").reverse().join("");

if (inputWord === reverseWord) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
} */

// === 17th question finish!

/* 1️⃣8️⃣;  Reverse Without String Methods – Ask the user for a number 
and reverse it without using .split(), .reverse(), or .join(). */

/* let userNum = parseInt(123);
let reverseNum = 0;

while (userNum > 0) {
  reverseNum = reverseNum * 10 + (userNum % 10);
  userNum = Math.floor(userNum / 10);
}
console.log(reverseNum); */

// === 18th question finish!

/* 1️⃣9️⃣;  Find Second Largest – Take three numbers as input and find 
the second largest number (without using sort() or Math.max()).*/

/* const inputNumbers = [10, 20, 15, 25, 21];
let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < inputNumbers.length; i++) {
  if (inputNumbers[i] > firstLargest) {
    secondLargest = firstLargest;
    firstLargest = inputNumbers[i];
  } else if (inputNumbers[i] > secondLargest) {
    secondLargest = inputNumbers[i];
  }
}

console.log(firstLargest, secondLargest); */

// === 19th question finish!

/* 2️⃣0️⃣;  Find First Non-Repeating Character – Ask the user for a word 
and find the first character that does not repeat. Example: hello 
→ h (since e, l, and o repeat). */

/* const userInputWords = "hello";
const countChar = {};
let non_repeat_char;

for (let i = 0; i < userInputWords.length; i++) {
  countChar[userInputWords[i]]
    ? countChar[userInputWords[i]]++
    : (countChar[userInputWords[i]] = 1);
}
for (let char of userInputWords) {
  if (countChar[char] === 1) {
    non_repeat_char = char;
    break;
  }
}
console.log(non_repeat_char); */

// === 20th question finish!

/* 2️⃣1️⃣;  Even Digit Counter – Take a number from the user and count 
how many even digits it has.*/

/* const userInputNumber = 10;
let count = 0;

if (userInputNumber <= 1) {
  console.log("Upgarde your number!");
} else {
  for (let i = 1; i <= userInputNumber; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  console.log(count);
} */

// === 21th question finish!

/* 2️⃣2️⃣;   Nested Condition Challenge – Ask the user for their age and 
salary. Print a message based on conditions:
 If age is below 18, print “Not eligible”
 If age is 18 or more but salary is less than ₹20,000, print “Low        
Salary”
 If salary is ₹50,000 or more, print “High Salary”
 .  Otherwise, print “Medium Salary” */

/* const userAge = 19;
const userSalary = 10000;

if (userAge < 18) {
  console.log("Not eligible");
} else if (userAge > 18 && userSalary < 20000) {
  console.log("Low Salary");
} else if (userSalary >= 50000) {
  console.log("High Salary");
} else {
  console.log("Medium Salary");
} */

// === 22th question finish!

/* 2️⃣3️⃣;  Toggle Case – Ask the user for a word and toggle the case of 
every character. Example: HeLLo → hEllO. */

/* const userWord = "HeLLo";
let result = "";

for (const char of userWord) {
  if (char === char.toLowerCase()) {
    result += char.toUpperCase();
  } else {
    result += char.toLowerCase();
  }
}
console.log(result); */

// === 23th question finish!

/* 2️⃣4️⃣;  Find the Missing Number in a Sequence – Take a list of 
consecutive numbers (except one missing) and find the 
missing number. Example: 1, 2, 3, 5 → Missing number is 4. */

/* const lisOfNumbers = [1, 2, 3, 5];
let maxNum = lisOfNumbers[0];
let missingNumber;

for (let i = 0; i < lisOfNumbers.length; i++) {
  if (maxNum < lisOfNumbers[i]) {
    maxNum = lisOfNumbers[i];
  }
}
for (let i = 1; i <= maxNum; i++) {
  if (!lisOfNumbers.includes(i)) {
    missingNumber = i;
  }
}
console.log(`Missing number is : ${missingNumber}`); */

// === 24th question finish!

/* 2️⃣5️⃣;  Convert Number to Words – Take a single-digit number and 
print it in words (Example: 1 → One, 2 → Two).*/

/* 
const inputNumber = 3;

switch (inputNumber) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("Five");
    break;
  default:
    console.log("Invalid Input");
} */

// === 25th question finish!
