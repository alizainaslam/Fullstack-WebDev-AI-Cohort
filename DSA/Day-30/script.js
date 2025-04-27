// —Loop

// Q. Accept an integer and Print hello world n time
let userInput = Number(5);
// print(userInput, "Hello World");

function print(n, input) {
  if (isNaN(n)) throw new Error("Invalid Input!");
  for (let i = 1; i <= n; i++) {
    console.log(input);
  }
}

// Q. Print natural number up to n.
let naturalNumber = Number(9);
// printNaturalNumber(naturalNumber);

function printNaturalNumber(n) {
  if (isNaN(n)) throw new Error("Invalid Input!");
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Q. Reverse for loop. Print n to 1.
let rNumber = Number(10);
// reverseLoop(rNumber);

function reverseLoop(n) {
  if (isNaN(n)) throw new Error("Invalid Input!");
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

// Q. Take a number as input and print its table
let nTable = Number(7);
// PrintTable(nTable);

function PrintTable(n) {
  if (isNaN(n)) throw new Error("Invalid Input!");
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// Q. Sum up to n terms.
let num = Number(5);
// console.log(sumOfNum(num));

function sumOfNum(n) {
  if (isNaN(n)) throw new Error("Invalid input!");
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
}

// Q. Factorial of a number
let fecN = Number(4);
// console.log(fecNum(fecN));

function fecNum(n) {
  if (isNaN(n)) throw new Error("Invalid input!");
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

// Q. Print the sum of all even & odd
let uInput = Number(10);
// console.log(sumOfEvenAndOdd(uInput));

function sumOfEvenAndOdd(n) {
  if (isNaN(n)) throw new Error("Invalid Input");
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) sumEven += i;
    if (i % 2 !== 0) sumOdd += i;
  }
  return [sumEven, sumOdd];
}

// Q. Print all the factors of a number.
let facNum = Number(12);
// factors(facNum);
// console.log(facNum);

function factors(n) {
  if (isNaN(n)) throw new Error("Invalid Input");
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}

// Q. Check if the number is Prime or not.
let pNumber = Number(23);
// console.log(primeNumber(pNumber));

function primeNumber(n) {
  if (isNaN(n) || n < 1) throw new Error("Invalid Input");
  if (n == 1) return false;
  if (n == 2) return true;
  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Q. Write a program to take two inputs a, b & find the value of a  raised to the power of b. Ex - a = 2, b = 5  OP - 2^5 = 32

function power(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Invalid Input");
  if (b < 1) return a;
  let res = 1;
  for (let i = 1; i <= b; i++) {
    res *= a;
  }
  return res;
}
// console.log(power(2, 13));

// —break and continue
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) break;
} // it'll stop when reach 5
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
} // it'll not print 5 and go till end
