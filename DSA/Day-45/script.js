// Transpose a 2D matrix
const inputArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function transpose(matrix) {
  let transposeArray = Array.from({ length: matrix[0].length }, () =>
    Array.from({ length: matrix.length })
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transposeArray[j][i] = matrix[i][j];
    }
  }
  return transposeArray;
}

// Rotate Image
function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let start = 0,
      end = matrix[i].length - 1;
    while (end > start) {
      let temp = matrix[i][start];
      matrix[i][start] = matrix[i][end];
      matrix[i][end] = temp;
      start++;
      end--;
    }
  }

  return matrix;
}

// Spiral Order
function spiralOrder(matrix) {
  let spiralOrderArray = [];
  let top = 0,
    bottom = matrix.length - 1,
    left = 0;
  right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      spiralOrderArray.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      spiralOrderArray.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiralOrderArray.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiralOrderArray.push(matrix[i][left]);
      }
      left++;
    }
  }
  return spiralOrderArray;
}

// flip And Invert Image
const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

function flipAndInvertImage(image) {
  for (let i = 0; i < image.length; i++) {
    let start = 0;
    end = image[i].length - 1;
    while (start <= end) {
      let temp = image[i][start];
      image[i][start] = image[i][end];
      image[i][end] = temp;
      start++;
      end--;
    }
  }
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] == 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
    }
  }
  return image;
}
