# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # prev tracks the reversed portion, curr tracks the current node.
        prev, curr = None, head

        while curr:
            # Save the next node before overwriting the pointer.
            temp = curr.next

            # Reverse the current node's pointer.
            curr.next = prev

            # Advance both pointers to process the next node.
            prev = curr
            curr = temp

        # prev is now the head of the reversed linked list.
        return prev

# Time: O(n) — visit each node exactly once.
# Space: O(1) — reverse the list in place using three pointers.
# n = number of nodes in the linked list.