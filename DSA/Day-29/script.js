// ⚠️ If you want to test this file in to your local or want to excute any function, then un-comment try-catch block of that function.

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

function isLeapYear(year) {
  if (isNaN(year)) throw new Error("Input should be a valid number.");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

/* try {
  console.log(isLeapYear(1900));
  console.log(isLeapYear(2024));
  console.log(isLeapYear(3104));
} catch (error) {
  console.error(error.message);
} */

/* Calculate discount based on purchase amount:
- amount < 5000 : discount 0%
- 5000 > amount < 7000 : discount 5%
- 7000 > amount < 9000 : discount 10%
- amount > 9000 : discount 20% */

function calculateFinalAmount(amount) {
  if (isNaN(amount) || amount < 0) throw new Error("Invalid input!");

  let finalAmount = 0;
  if (amount <= 5000) finalAmount = amount;
  else if (amount <= 7000) finalAmount = amount - (5 * amount) / 100;
  else if (amount <= 9000) finalAmount = amount - (10 * amount) / 100;
  else finalAmount = amount - (20 * amount) / 100;

  return `After discount total amount is: ${finalAmount}`;
}

/* try {
  console.log(calculateFinalAmount(6000));
  console.log(calculateFinalAmount(5700));
} catch (error) {
  console.error(error.message);
} */

/* Calculate electricity bill based on units consumed:
- First 100 units: Rs. 4.2/unit
- Next 100 units (101-200): Rs. 6/unit
- Next 300 units (201-400): Rs. 8/unit
- Above 400 units: Rs. 13/unit */

function calculateElectricityBill(unit) {
  if (isNaN(unit) || unit < 0) throw new Error("Invalid Unit!");

  let bill = 0;

  if (unit < 101) bill = unit * 4.2;
  else if (unit < 201) bill = 100 * 4.2 + (unit - 100) * 6;
  else if (unit < 401) bill = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
  else if (unit > 400) bill = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;

  return bill.toFixed(1);
}

/* try {
  console.log(calculateElectricityBill(18));
  console.log(calculateElectricityBill(180));
  console.log(calculateElectricityBill(1800));
} catch (error) {
  console.error(error.message);
} */
