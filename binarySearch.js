function binarySearch(array, target) {	
	return binarySearchHelper(array, target, 0, array.length - 1);	
};

function binarySearchHelper(array, target, left, right) {
	if (left > right) return -1;
	const midIndex = Math.floor((left + right) / 2)
	const midpoint = array[midIndex]	
	if (midpoint === target) return midIndex;
	if (target < midpoint) {
		return binarySearchHelper(array, target, left, midIndex - 1);
	} 
	if (target > midpoint) {
		return binarySearchHelper(array, target, midIndex + 1, right);
	}	
}