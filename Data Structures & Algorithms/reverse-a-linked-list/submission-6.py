class Solution:
    def reverseList(self, head: ListNode) -> ListNode:

        def dfs(prev, curr):
            # Base case: prev is the new head of the reversed list.
            if not curr:
                return prev

            # Save the next node before reversing the pointer.
            temp = curr.next
            curr.next = prev

            # Recursively process the next node.
            return dfs(curr, temp)

        return dfs(None, head)

# Time: O(n) — visit each node exactly once.
# Space: O(n) — recursive call stack.
# n = number of nodes in the linked list.