# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    sums = []
    sum_calc(root, 0, sums)
    return sums


def sum_calc(node, running_sum, sums):
    if node is None:
        return

    new_running_sum = running_sum + node.value
    if node.left is None and node.right is None:
        sums.append(new_running_sum)
        return

    sum_calc(node.left, new_running_sum, sums)
    sum_calc(node.right, new_running_sum, sums)

# Initialize a sums list in the branch sums function as an empty list
# Have a helper function that calculates branch sums
# traverse down the tree calling the calculator function on left and
# right nodes
# when there are no nodes left, return the sum
