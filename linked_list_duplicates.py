# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeDuplicatesFromLinkedList(linkedList):
    # Write your code here.
    # traverse the list and add values to a hash map called visited
    # as traversal continues, if value is found delete the node from the list
    # in order to do so: keep track of prevNode,
    # prevNode.next = currNode.next, set currNode.next to None
    prevNode = None
    currNode = linkedList
    visited = dict()
    while currNode:
        if currNode.value in visited:
            prevNode.next = currNode.next
            currNode.next = None
            currNode = prevNode.next
        else:
            visited[currNode.value] = True
            prevNode = currNode
            currNode = currNode.next
    return linkedList
