def nodeDepths(root):
    # Want to travel to every node and determine that node's depth
    # and add it to the sum of all the node depths
    # initialize a list for the depths as an empty list
    depths = []
    # call the helper function on left and right children
    if root.left is not None:
        node_depths_helper(root.left, 0, depths)
    if root.right is not None:
        node_depths_helper(root.right, 0, depths)
    # return depths
    return sum(depths)


# create a helper function that takes in a node, the depths list,
# and the current depth
def node_depths_helper(node, current_depth, depths):
    # helper function should add 1 to depth, push new depth to depths list,
    # and call itself on left and right
    current_depth += 1
    depths.append(current_depth)
    # if there is no left and right it should return
    if node.left is None and node.right is None:
        return
    # call the function on the right and left node
    if node.left is not None:
        node_depths_helper(node.left, current_depth, depths)
    if node.right is not None:
        node_depths_helper(node.right, current_depth, depths)


# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
