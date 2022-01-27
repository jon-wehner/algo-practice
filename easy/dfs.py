# Do not edit the class below except
# for the depthFirstSearch method.
# Feel free to add new properties
# and methods to the class.
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array

# We have a node with an array of children
# We want to use DFS to traverse the tree (from left to right)
# and store the names of all the child nodes
# Possible implementation iterate through children,
# append the name of each child into the array
# call the function again
# if no children, return
