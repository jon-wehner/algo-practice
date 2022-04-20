# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# in order traversal answer
# on time and space


# def findKthLargestValueInBst(tree, k):
#     sortedNodeValues = []
#     inOrderTraverse(tree, sortedNodeValues)
#     return sortedNodeValues[len(sortedNodeValues) - k]


# def inOrderTraverse(node, sortedNodeValues):
#     if node is None:
#         return

#     inOrderTraverse(node.left, sortedNodeValues)
#     sortedNodeValues.append(node.value)
#     inOrderTraverse(node.right, sortedNodeValues)


# find the kth largest value in the bst
# perform a reverse in order traversal until the kth node is found

class TreeInfo:
    def __init__(self, numberOfNodesVisited, latestVisitedNodeValue):
        self.numberOfNodesVisited = numberOfNodesVisited
        self.latestVisitedNodeValue = latestVisitedNodeValue


def findKthLargestValueInBst(tree, k):
    treeInfo = TreeInfo(0, -1)
    reverseInOrderTraverse(tree, k, treeInfo)
    return treeInfo.latestVisitedNodeValue


def reverseInOrderTraverse(node, k, treeInfo):
    if node is None or treeInfo.numberOfNodesVisited >= k:
        return

    reverseInOrderTraverse(node.right, k, treeInfo)
    if treeInfo.numberOfNodesVisited < k:
        treeInfo.numberOFNodesVisited += 1
        treeInfo.latestVisitedNodeValue = node.value
        reverseInOrderTraverse(node.left, k, treeInfo)
