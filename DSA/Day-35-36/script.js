// Array
// Q 43. Accept value from user and assign in the array
let userValue = "Value";
const basicArray = [];
basicArray[0] = userValue;
// console.log(basicArray);

// Q 44. Sum of array’s element
let arraysElement = [1, 10, 22, 28, 19, 27, 28];
let sumOfArraysElement = 0;
for (let i = 0; i < arraysElement.length; i++) {
  sumOfArraysElement += arraysElement[i];
}
// console.log(sumOfArraysElement);

// Q 45. Max element from array
let maxEle = arraysElement[0];
for (let i = 1; i < arraysElement.length; i++) {
  if (arraysElement[i] > maxEle) {
    maxEle = arraysElement[i];
  }
}
// console.log(maxEle);

// Q 46. Second max element from array
let firstMax = Math.max(arraysElement[0], arraysElement[1]);
let secondMax = Math.min(arraysElement[0], arraysElement[1]);
for (let i = 2; i < arraysElement.length; i++) {
  if (arraysElement[i] > firstMax) {
    secondMax = firstMax;
    firstMax = arraysElement[i];
  } else if (arraysElement[i] > secondMax && arraysElement[i] != firstMax) {
    secondMax = arraysElement[i];
  }
}
// console.log(secondMax);

// Q 47. Min element from array
let minEle = arraysElement[0];
for (let i = 0; i < arraysElement.length; i++) {
  if (arraysElement[i] < minEle) {
    minEle = arraysElement[i];
  }
}
// console.log(minEle);

// Q 48. Second min element from array
let firstMinEle = Math.min(arraysElement[0], arraysElement[1]);
let SecondMinEle = Math.max(arraysElement[0], arraysElement[1]);

for (let i = 2; i < arraysElement.length; i++) {
  if (arraysElement[i] < firstMinEle) {
    SecondMinEle = firstMinEle;
    firstMinEle = arraysElement[i];
  } else if (
    arraysElement[i] < firstMinEle &&
    arraysElement[i] != firstMinEle
  ) {
    SecondMinEle = arraysElement[i];
  }
}
// console.log(SecondMinEle);

// Q 49. Reverse the array
const revArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0,
  j = revArray.length - 1;
while (i < j) {
  let temp = revArray[i];
  revArray[i] = revArray[j];
  revArray[j] = temp;
  i++;
  j--;
}
// console.log(revArray);

// Q 50. All zeroes to left and all ones to right
const zeroRotation = [0, 1, 1, 0, 1, 1, 0, 0];
let k = 0,
  l = 0;
while (k < zeroRotation.length) {
  if (zeroRotation[k] == 0) {
    let temp = zeroRotation[k];
    zeroRotation[k] = zeroRotation[l];
    zeroRotation[l] = temp;
    l++;
  }
  k++;
}
// console.log(zeroRotation);

//  Q 51. Array left Rotation by 1
const arrays = [1, 2, 3, 4, 5];
let tempo = arrays[0];
let m = 0;
while (m < arrays.length - 1) {
  arrays[m] = arrays[m + 1];
  m++;
}
arrays[arrays.length - 1] = tempo;
// console.log(arrays);

//  Q 52. Array right Rotation by 1
const arrayss = [1, 2, 3, 4, 5];
let tempr = arrayss[arrayss.length - 1];
let n = arrayss.length - 1;
while (n > 0) {
  arrayss[n] = arrayss[n - 1];
  n--;
}
arrayss[0] = tempr;
// console.log(arrayss);
