/*
write a function that takes in an n x m 2d array and return an array of all the el in spiral order
first: traverse the perimeter
need to find start column, end column, end row
increment start column/row, decrement end column/row
keep traversing until start/end cross
*/

// O(N) time, O(N)Space
// N is the total number of elements in the 2d array
function spiralTraverse(array) {
  const result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {      
      if(startRow === endRow) break;
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if(startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    startCol++;
    endRow--;
    endCol--;
  }
  return result;
}

// O(N) time O(N) space
function spiralTraverseRecursive(array) {
  const result = [];
  spiralFill(array, 0, array[0].length, 0, array.length - 1, result);
  return result;
}

function spiralFill(array, startRow, endRow, startCol, endCol, result) {
  if (startRow >= endRow && startCol >= endCol) return
  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col]);
  }
  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol]);
  }
  for (let col = endCol - 1; col >= startCol; col--) {
    if(startRow === endRow) break
    result.push(array[endRow][col]);
  }
  for (let row = endrow - 1; row > startRow; row--) {
    if(startCol === endCol) break
    result.push(array[row][startCol]);
  }
  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result)
}