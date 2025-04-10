// ⚠️ If you want to test this file in to your local or want to excute any function, then uncomment try-catch block of that function.

//  → Math problems :

// Calculate compound interest using the formula: A = P * (1 + R/N)^(N*T)

function calculateCompoundInterest(P, r, n, t) {
  if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t))
    throw new Error("Input should be a number.");

  let A = P * Math.pow(1 + r / n, n * t);
  let CI = A - P;
  return CI.toFixed(2);
}

/* try {
  console.log(calculateCompoundInterest(1000, 0.6, 4, 2));
  console.log(calculateCompoundInterest(1500, 0.3, 2, 5));
} catch (error) {
  console.error(error.message);
} */

// Calculate area of a triangle using Heron's formula: A = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2.

function calculateAreaOfTriangle(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new Error("Input of areas should be a number.");
  } else {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Sum of two sides should be greater than 3rd one.");
    } else {
      let s = (a + b + c) / 2;
      let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      return A.toFixed(1);
    }
  }
}
/* 
try {
  console.log(calculateAreaOfTriangle(3, 4, 10));
  console.log(calculateAreaOfTriangle(6, 8, 10));
} catch (error) {
  console.error(error.message);
} */

// Generate a numeric OTP (One-Time Password) of given length.

function generateOTP(length) {
  if (isNaN(length) || length <= 0)
    throw new Error("Length should be a valid number.");

  let index = 1;
  for (let i = 0; i < length; i++) {
    index = index * 10;
  }

  let OTP = Math.random(Math.floor) * index + 1000;
  return Math.trunc(OTP);
}

/* try {
  console.log(generateOTP(4));
} catch (error) {
  console.error(error.message);
} */

// Calculate the circumference of a circle using the formula: C = 2 * π * r.

function circumferenceOfCircle(r) {
  if (isNaN(r) || r <= 0) throw new Error("Input should be a valid number.");

  let C = 2 * Math.PI * r;
  return C.toFixed(4);
}

/* try {
  console.log(circumferenceOfCircle(5));
  console.log(circumferenceOfCircle(10));
} catch (error) {
  console.error(error.message);
} */

// → IF-ELSE :

// Accept two numbers and print the greatest among them.

function greatestNumber(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("Input should be a valid number.");

  return Math.max(a, b);
}

/* try {
  console.log(greatestNumber(10, 20));
  console.log(greatestNumber(45, 30));
} catch (error) {
  console.error(error.message);
} */

// Accept an integer and check whether it is an even number or odd.

function isEven(number) {
  if (isNaN(number)) throw new Error("Input should be a valid number.");

  let output;
  number % 2 == 0
    ? (output = "It is Even number.")
    : (output = "It is odd number.");
  return output;
}

/* try {
  console.log(isEven(10));
  console.log(isEven(5));
} catch (error) {
  console.error(error.message);
} */

// Accept name and age from the user. Check if the user is a valid voter or not.

function isValidVoter(name, age) {
  if (!isNaN(name))
    throw new Error(`Invalid input: name "${name}" should be a string.`);
  if (isNaN(age))
    throw new Error(`Invalid input: age "${age}" should be a valid number.`);
  let result;
  age >= 18
    ? (result = `${name} is a valid voter.`)
    : (result = `${name} is not a valid voter.`);
  return result;
}

/* try {
  console.log(isValidVoter("Ali", 18));
  console.log(isValidVoter("Zain", 17));
} catch (error) {
  console.error(error.message);
} */

// Accept three numbers and print the greatest among them.

function greatestNumber(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new Error("Input should be a valid number.");
  } else {
    return Math.max(a, b, c);
  }
}

/* try {
  console.log(greatestNumber(10, 20, 18));
  console.log(greatestNumber(45, 30, 47));
} catch (error) {
  console.error(error.message);
} */

// Accept a year and check if it a leap year or not (google to find out what's a leap year).

function isLeepYear(year) {
  if (isNaN(year)) throw new Error("Input should be a valid number.");

  let isLeep = false;

  year % 4 == 0
    ? (isLeep = true)
    : year % 100 == 0 && year % 400 == 0
    ? (isLeep = true)
    : (isLeep = false);

  return isLeep;
}

try {
  console.log(isLeepYear(1901));
  console.log(isLeepYear(2024));
  console.log(isLeepYear(3104));
} catch (error) {
  console.error(error.message);
}
