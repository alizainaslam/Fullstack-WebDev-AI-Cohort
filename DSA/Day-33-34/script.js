// —Nested Looping : Pattern programming

// Q 35. Right Angle Traingle
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write("* ");
  }
  //   console.log();
}

// Q 36. Numeric Right Angle Traingle
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(j + " ");
  }
  //   console.log();
}

// Q 37. English Alphabetic
for (let i = 65; i <= 69; i++) {
  for (let j = 65; j <= i; j++) {
    // process.stdout.write(String.fromCharCode(j) + " ");
  }
  //   console.log();
}

// Q 38. Inverted Right Angle Triangle
let temp = 5;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= temp; j++) {
    // process.stdout.write("* ");
  }
  temp--;
  //   console.log();
}
