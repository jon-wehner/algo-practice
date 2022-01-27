function findClosestValueInBst(tree, target) {
  let closest = Infinity;
	let closestDifference = Infinity;
	let currentNode = tree
	while (currentNode) {
		if (currentNode.value === target) return currentNode.value;
		const currentDifference = Math.abs(currentNode.value - target)
		if (currentDifference < closestDifference) {
			closest = currentNode.value
			closestDifference = currentDifference
		}
		if (currentNode.value < target) {
			currentNode = currentNode.right
		} else {
			currentNode = currentNode.left
		}
	}
	return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Find the closest value to a given target value, and a given tree.
// initialize a closest value as infinity
// initialize a currentNode which is the root
// intialize a current difference also as infinity 
// iterate through the tree 
// compute difference to target, check against closest
// if currentNode value is less than target, go down right tree
// if currentNode value is more then target, god down left tree
// if currentNode value is target return value
// if nextNode is null, return closest

/* 
PSEDUOCODE
function findClosestInBST(tree, target)
	if currentNode.value = target return currentNode.value
	closest = infinity
	closestDifference = infinity
	currentNode = tree
	while currentNode
		difference = absoluteValue(currentNode - target)
		if difference < closestDifference
			closest = currentNode.value
			closestDifference = difference
		if currentNode.value < target 
			currentNode = currentNode.right
		else 
			currentNode = currentNode.left
	return closest 
		
*/

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
