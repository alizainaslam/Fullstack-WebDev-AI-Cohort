// Recursion

// —Q 73.Print hello n times
// printHello(5);
function printHello(n) {
  if (n === 0) return;
  console.log("Hello");
  printHello(n - 1);
}

// —Q 74.Print natural number  n-1
// printNumbers(10);
function printNumbers(n) {
  if (n === 0) return;
  console.log(n);
  printNumbers(n - 1);
}

