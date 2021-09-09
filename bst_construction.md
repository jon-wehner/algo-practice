PSEUDOCODE FOR INSERTION

def insert(self, value):
	nextnode = true
	while nextNode
		if value >= self.value
			nextNode = self.right
		else 
			nextNode = self.left
	nextNode = BST(value)
	
insertion recursive

def insert(self, value)
	currentNode = self
	if value < currentNode.value
		if currentNode.left is None
			currentNode.left = BST(value)
		else
			currentNode.left.insert(value)
	else
		if currentNode.right is None:
			currentNode.right = BST(value)
		else
			currentNode.right.inser(value)
			
CONTAINS:
traverse the tree using the BST property
if the value is found, return true
return false if the BST property yields none