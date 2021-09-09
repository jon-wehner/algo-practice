# Do not edit the class below except for
# the insert, contains, and remove methods.
# Feel free to add new properties and methods
# to the class.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        currentNode = self
        if value < currentNode.value:
            if currentNode.left is None:
                currentNode.left = BST(value)
            else:
                currentNode.left.insert(value)
        else:
            if currentNode.right is None:
                currentNode.right = BST(value)
            else:
                currentNode.right.insert(value)
        return self

    def contains(self, value):
        # Write your code here.
        pass

    def remove(self, value):
        # Write your code here.
        # Do not edit the return statement of this method.
        return self
