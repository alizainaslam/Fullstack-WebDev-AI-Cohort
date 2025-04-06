/* 1️⃣ : Callbacks: Write a function that takes a callback and calls it after 2 seconds. */

function callBack() {
  console.log("Hello from cb fn");
}

function executerFn(fn, delay) {
  setTimeout(fn, delay);
}

// executerFn(callBack, 2000);

// ==== 1st question finish

/* 2️⃣ : Closures: Create a function that maintains a private counter and allows incrementing but not direct access. */

function counter() {
  let count = 0;
  return function privateCounter() {
    count++;
    console.log(count);
  };
}
const increment = counter();
// increment();

// ==== 2nd question finish

/* 3️⃣ : HOFs (Higher-Order Functions): Implement your own version of map() that works on arrays. */

const arr = [1, 2, 3, 4, 5];

function customMap(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}
const ans = customMap(arr, function (val) {
  return val + 1;
});
// console.log(ans);

// ==== 3rd question finish

/* 4️⃣ : Callbacks & Asynchronous JS: Write a function that mimics an API request using setTimeout() and accepts a callback for handling the response. */

async function hadnleApiResponse() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const data = await fetch(url);
  if (!data) {
    console.log("Error");
  } else {
    jsonData = await data.json();
    console.log(jsonData);
  }
}

function handleDelay(fn, delay) {
  setTimeout(fn, delay);
}

handleDelay(hadnleApiResponse, 5000);

// ==== 4th question finish
