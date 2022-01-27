// implement binary search

// Solution 1: O(logn) time/ O(logn) space
function binarySearchRecursive(array, target) {
	return binarySearchRecursiveHelper(array, target, 0, array.length - 1)
};

function binarySearchRecursiveHelper(array, target, left, right) {
	if (left > right) {
		return -1
	}
	const middle = Math.floor((left + right) / 2);
	const potentialMatch = array[middle];
	if (target == middle) {
		return middle
	} else if (target < potentialMatch) {
		return binarySearchRecursiveHelper(array, target, left, middle - 1);
	} else {
		return binarySearchRecursive(array, target, middle + 1, right)
	}
}
// Solution 2: O(logn) time/ O(1) space
function binarySearchIterative(array, target) {
	return binarySearchIterativeHelper(array, target, 0, array.length - 1)
}

function binarySearchIterativeHelper(array, target, left, right) {
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		const potentialMatch = array[middle];
		if (target === potentialMatch) {
			return middle
		} else if (target < potentialMatch) {
			right = middle - 1;
		} else {
			left = middle + 1
		}
	}
	return - 1
}

