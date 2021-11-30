function twoNumberSumHash (array, targetSum) {
  const nums = {};
  for (let i = 0; i < array.length; i++) {
    const potentialMatch = targetSum - array[i];
    if (nums[potentialMatch]) {
      return [potentialMatch, array[i]]
    } else {
      nums[array[i]] = true;
    }
  };
  return []
};

function twoNumberSumPointers (array, targetSum) {
  array.sort();
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    const currentSum = array[leftPointer] + array[rightPointer];
    if (currentSum == targetSum) {
      return [array[leftPointer], array[rightPointer]]
    } else if (currentSum < targetSum) {
      leftPointer += 1
    } else if (currentSum > targetSum) {
      rightPointer += 1
    }
  }
  return []
}