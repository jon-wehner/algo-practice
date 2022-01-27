// given an array find three numbers with a sum equal to a given target


// steps: sort the array
// iterate through array
// set a left pointer to number to the right of num, right pointer at end of the array
// current sum = curr + left + right
// check is current sum is the target
// if it is, add the triplet to the answer array
// Since the array is sorted, moving the left pointer right will increase sum, moving right pointer left will decrease it

// time: O(N^2) space: O(N)
function threeNumberSum(array, target) {
  array.sort((a,b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === target) {
        triplets.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (currentSum < target) {
        left += 1
      } else if (currentSum > target) {
        right -= 1
      }
    }
  }
  return triplets;
};