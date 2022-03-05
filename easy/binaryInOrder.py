# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        answer = []
        self.inOrderHelper(root, answer)
        return answer

    def inOrderHelper(self, root, list):
        if root is not None:
            self.inOrderHelper(root.left, list)
            list.append(root.val)
            self.inOrderHelper(root.right, list)
