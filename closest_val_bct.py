def findClosestValueInBst(tree, target):
    return find_closest_value_in_bst_helper(tree, target, tree.value)
    pass


def find_closest_value_in_bst_helper(tree, target, closest):
    # Write a base case
    if tree is None:
        return closest
    # If the current node value is closer to target than current closet, set closest to node value
    if abs(target-closest) > abs(target - tree.value):
        closest = tree.value
    # if target is less than node value, traverse down left
    if target < tree.value:
        return find_closest_value_in_bst_helper(tree.left, target, closest)
    # if target greater than node value, traverse down right
    elif target > tree.value:
        return find_closest_value_in_bst_helper(tree.right, target, closest)
    else:
        return closest

# This is the class of the input tree. Do not edit.


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
