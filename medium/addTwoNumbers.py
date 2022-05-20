# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        dummyHead = ListNode(0)
        p = l1
        q = l2
        curr = dummyHead
        carry = 0
        while p or q:
            x = p.val if p is not None else 0
            y = q.val if q is not None else 0
            
            sum = x + y + carry
            carry = int(sum / 10)
            curr.next = ListNode(sum % 10)
            curr = curr.next
            
            if p is not None:
                p = p.next
            if q is not None:
                q = q.next
        if carry > 0:
            curr.next = ListNode(carry)
        return dummyHead.next
"""
2   4   3 
5   6   4
7   0   8
    

    L1 + L2 = NEW NODE VAL = 7
    l1, l2 = l1.next, l2.next
    L1 + L2 = answer.next = new node val = 0, carry = 1
    l1, l2 = l1.next, l2.next
    L1 + L2 + carry = 8
    
    keep track of the first answer node to return it
    keep track of a current variable which is initialized as the answer node
    keep track of carry, init as 0
    
    at each iteration make a new nade with val = l1.val + l2.val + carry
    carry is int(val/10)
    attach it to current node as next
    set current to current.next
"""            
