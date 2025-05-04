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
