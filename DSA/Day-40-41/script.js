// Q. Array left rotation by K elements
let arrEle = [1, 2, 3, 4, 5];
let arrLength = arrEle.length;
let kEle = 2 % arrLength;

function reverse(arr, start, end) {
  let i = start,
    j = end;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

reverse(arrEle, 0, arrLength - 1);
reverse(arrEle, 0, arrLength - kEle - 1);
reverse(arrEle, arrLength - kEle, arrLength - 1);

// console.log(arrEle);

// Q. Binary Searc
let sortedArr = [1, 2, 3, 4, 5, 6];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return "target found";
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return "target not found";
}

// console.log(binarySearch(sortedArr, 5));

// Q. Bubble sort
let unSortedArr = [5, 2, 9, 1, 5, 6];
for (let i = 0; i < unSortedArr.length - 1; i++) {
  for (let j = 0; j < unSortedArr.length - i - 1; j++) {
    if (unSortedArr[j] > unSortedArr[j + 1]) {
      [unSortedArr[j], unSortedArr[j + 1]] = [
        unSortedArr[j + 1],
        unSortedArr[j],
      ];
    }
  }
}

// console.log(unSortedArr);

// Q. Insertion sort
let unSortedArray = [5, 2, 9, 1, 5, 6];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(insertionSort(unSortedArray));

// Q. Selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      if (minIndex != i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  return arr;
}
// console.log(selectionSort(unSortedArray));
