# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        def dfs(prev, curr):
            if not curr:
                return prev
            tmp = curr.next
            curr.next = prev
            return dfs(curr, tmp)
            

        

        return dfs(None, head)

        