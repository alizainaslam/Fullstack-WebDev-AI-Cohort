// Q. Sum of digits of a number : 1234 == 10.
let userInput = Number(1234);
// console.log(sumOfDigits(userInput));

function sumOfDigits(n) {
  if (isNaN(n) || n < 0) console.log("Invalid input!");
  let sumOfDigit = 0;
  while (n > 0) {
    sumOfDigit += n % 10;
    n = Math.floor(n / 10);
  }
  return sumOfDigit;
}

// Q. Reverse a number : 1234 == 4321.
let inNumber = Number(1234);
// console.log(reverseNumber(inNumber));

function reverseNumber(n) {
  if (isNaN(n) || n < 0) console.log("Invalid input!");
  let reverse = 0;
  while (n > 0) {
    let rem = n % 10;
    reverse = reverse * 10 + rem;
    n = Math.floor(n / 10);
  }
  return reverse;
}

// Q. Automorphic number : 5
let input = Number(6);
// console.log(automorphicNumber(input));

function automorphicNumber(n) {
  if (isNaN(n) || n < 0) console.log("Invalid input!");
  let copyOfNumber = n;
  let sq = n * n;
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  if (sq % Math.pow(10, count) == copyOfNumber) {
    return true;
  } else {
    return false;
  }
}

// —Switch Case
let dayNumber = Number(4);

/* switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7)
      console.log("Invalid Input");
    break;
} */

// —do-while
let uInput;
/* do {
  uInput = Number(1);
  console.log("You entered " + uInput);
} while (uInput !== 0); */

// Q. Repeat hello
let count = 1;
/* do {
  console.log("Hello");
  count++;
} while (count < 5); */

// 1. ISBN Number

let ISBNNumber = parseInt("0471958697");
let copyOfISBN = ISBNNumber;
let countOfNumber = 1;
let sumOfISBN = 0;
let isValidISBN = true;

while (ISBNNumber > 0) {
  countOfNumber++;
  ISBNNumber = Math.floor(ISBNNumber / 10);
}
if (isNaN(ISBNNumber) || countOfNumber < 10) throw new Error("Invalid Input");

while (countOfNumber > 0) {
  sumOfISBN += Math.floor(copyOfISBN % 10) * countOfNumber;
  copyOfISBN = Math.floor(copyOfISBN / 10);
  countOfNumber--;
}

// if (sumOfISBN % 11 === 0) console.log(isValidISBN);
// else console.log((isValidISBN = false));

// 2. HCF/GCD

let input1 = 18;
let input2 = 12;
// findHCFVerbose(input1, input2);

function getFactors(int) {
  if (isNaN(int) || int < 2) throw new Error("Invalid Input");
  let factors = [];
  for (let i = 0; i <= int / 2; i++) {
    if (int % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function findHCFVerbose(a, b) {
  let factorsA = getFactors(a);
  let factorsB = getFactors(b);
  let common = factorsA.filter((value) => factorsB.includes(value));
  let hcf = Math.max(...common);
  console.log(`HCF is:`, hcf);
  return hcf;
}

// 3. Harshad Number
let hInput = parseInt(1375);
// console.log(harshadNumber(hInput));

function harshadNumber(a) {
  if (isNaN(a) || a < 10) throw new Error("Invalid Input");
  let copy = a;
  let sumOfInput = 0;
  while (copy > 0) {
    sumOfInput += copy % 10;
    copy = Math.floor(copy / 10);
  }
  return a % sumOfInput === 0;
}

//  4. Perfect Square

let inp = Number(25);
let root = Math.sqrt(inp);
let isPerfectSqr = true;
if (Number.isInteger(root)) {
  isPerfectSqr;
} else {
  isPerfectSqr = false;
}
// console.log(isPerfectSqr);

//  5. Abundant Number

let abundantNumber = Number(12);
let sumOfAbundant = 0;

for (let i = 1; i <= abundantNumber / 2; i++) {
  if (abundantNumber % i === 0) {
    sumOfAbundant += i;
  }
}
// if (sumOfAbundant > abundantNumber) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// 6. Fibonacci Series using Loop
let fibNum = Number(6);
// console.log(fibonacciSeries(fibNum));

function fibonacciSeries(n) {
  if (isNaN(n) || n < 0) throw new Error("Invalid Input");

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
