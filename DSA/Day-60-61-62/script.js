// Q 74.Print natural number 1-n / n-1
function printNto1(n) {
  if (n === 0) return;
  process.stdout.write(n + " ");
  return printNto1(n - 1);
}
// printNto1(10);
function print1toN(n) {
  if (n === 0) return;
  print1toN(n - 1);
  process.stdout.write(n + " ");
}
// print1toN(10);

// —Q 75.Sum/factorial
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
// console.log(sum(10));

function factorila(n) {
  if (n === 0) return 1;
  return n * factorila(n - 1);
}
// console.log(factorila(5));

// —Q 76.Fibonacci series
function fibonacciSeries(n, first, second) {
  if (n === 0) return 0;
  if (n === 0) return 1;
  let third = first + second;
  process.stdout.write(third + " ");
  return fibonacciSeries(n - 1, second, third);
}
// fibonacciSeries(10 - 2, 0, 1);

// —Q 77.sum of digit  // 891 → 18
function sumOfDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
// console.log(sumOfDigits(891));

// —Q 78.reverse of digit  // 891 → 198
function reverseDigits(n, rev) {
  if (n < 0) {
    return -reverseDigits(-n, 0);
  }
  if (n === 0) return rev;
  return reverseDigits(Math.floor(n / 10), rev * 10 + (n % 10));
}
// console.log(reverseDigits(198, 0));

// —Q 77.GCD
let arr = [2, 5, 6, 9, 10];
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
let a = Math.min(...arr);
let b = Math.max(...arr);
// console.log(gcd(a, b));

// Q 78 Print all factors of the number in ascending order

function findFactors(n) {
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
}

// Q 78. Sqrt(n)
function sqrt(n) {
  let i = 1;
  for (; i * i <= n; i++) {
    if (i * i === n) return i;
  }
  return i - 1;
}
// console.log(sqrt(8));

// Q 79.Count of primes (Sieve of eratosthenes)
let inputNumber = 20;
function countPrimes(n) {
  let count = 0;
  let arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    if (arr[i]) {
      count++;
    }
  }
  return count;
}
// console.log(countPrimes(inputNumber));

// 80. Pow(x,n)
function myPow(n, p) {
  // Write your code here
  let res = Math.pow(n, p);
  console.log(res.toFixed(5));
}
// myPow(2.1, 3);

