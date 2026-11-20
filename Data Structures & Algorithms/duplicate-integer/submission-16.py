class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        visited = set()

        # traverse nums
        # check if new val is already in visited, then true
        for n in nums:
            if n in visited:
                return True
            visited.add(n)
        
        return False






            
        