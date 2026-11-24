# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        # Use a dummy node to avoid special handling of the head.
        # node tracks the tail of the merged list.
        dummy = node = ListNode()

        # Compare both lists while neither is exhausted.
        while list1 and list2:
            # Append the smaller node and advance its pointer.
            if list1.val < list2.val:
                node.next = list1
                list1 = list1.next
            else:
                node.next = list2
                list2 = list2.next

            # Advance the tail of the merged list.
            node = node.next

        # Attach the remaining list since it is already sorted.
        node.next = list1 or list2

        # Skip the dummy node to return the actual head.
        return dummy.next

# Time: O(n + m) — each node is processed at most once.
# Space: O(1) — reuse existing nodes by modifying their pointers.
# n and m are the lengths of list1 and list2, respectively.