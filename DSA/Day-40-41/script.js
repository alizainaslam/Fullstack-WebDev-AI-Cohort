// Q. Array left rotation by K elements
let arrEle = [1, 2, 3, 4, 5];
let kEle = 4 % arrEle.length;
let remEle = [];
let i = 0,
  j = 0,
  k = 0;
while (i < kEle) {
  remEle[i] = arrEle[i];
  i++;
}
while (j < arrEle.length - kEle) {
  arrEle[j] = arrEle[j + kEle];
  j++;
}
while (k < remEle.length) {
  arrEle[arrEle.length - kEle + k] = remEle[k];
  k++;
}

// Q. Linear Search an array - If element found print the index else -1
const arr = [1, 2, 3, 4, 5, 6];
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch(arr, 4));

// Q. — Binary Search

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return target;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
// console.log(binarySearch(arr, 4));
