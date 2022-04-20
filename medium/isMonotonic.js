/*
write a function that takes in an array of ints and returns a bool representing if array is monotonic
an array is monotonic is el from left to right are non increasing or non decreasing
*/

// time O(n) O(1)

// iterate through the array keeping track of direction
// if direction breaks, return false
// function isMonotonic(array) {
//   if (array.length <= 2) return true;
//   let direction = array[1] - array[0]
//   for (let i = 2; i < array.length; i ++) {
//     if (direction === 0) {
//       direction = array[i] - array[i - 1];
//       continue
//     }
//     if (breaksDirection(direction, array[i - 1], array[i])) return false
//   }
//   return true
// };

// function breaksDirection(direction, previousInt, currentInt) {
//   const difference = currentInt - previousInt;
//   if(direction > 0) {
//     return difference < 0;
//   }
//   return difference > 0;
// }

// check in the same loop if it's nonInc/nonDec, much simpler
// O(N) time, O(1) space
function isMonotonic (array) {
  let isNonDecreasing = true
  let isNonIncreasing = true
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false
    }
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false
    }
  }
  return isNonIncreasing || isNonDecreasing
}
