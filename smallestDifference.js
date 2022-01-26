// given two non empty arrays of integers, find the pair of numbers whose absolute difference is closest to zero, and return an array containing the pair. Number from the first array goes in the first position.

// Steps: sort both arrays
// declare a pointer for each array
// find the difference, move the pointer of the smaller number to the right until finding the smallest difference
// time O(Nlog(N) + MLog(M)) N is length of array 1, M is length of array 2
// space O(1)
function smallestDifference(array1, array2) {
  array1.sort((a,b) => a - b);
  array2.sort((a,b) => a - b);

  let idx1 = 0;
  let idx2 = 0;
  let smallestDifference = Infinity;
  let currentDifference = Infinity;
  let smallestPair = [];

  while (idx1 < array1.length && idx2 < array2.length) {
    let firstNum = array1[idx1];
    let secondNum = array2[idx2];

    if (firstNum < secondNum) {
      currentDifference = secondNum - firstNum;
      idx1 += 1;
    }
    else if (secondNum < firstNum) {
      currentDifference = firstNum - secondNum;
      idx2 += 1;
    }
    else {
      return [firstNum, secondNum]
    }
    if (smallestDifference > currentDifference) {
      smallestDifference = currentDifference;
      smallestPair = [firstNum, secondNum]
    }
  }
  return smallestPair
};