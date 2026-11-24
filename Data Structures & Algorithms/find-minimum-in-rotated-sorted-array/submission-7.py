class Solution:
    def findMin(self, nums: List[int]) -> int:
        l,r = 0, len(nums) - 1


        # 1 element remains, l == r


        # get m
        # check right side
        # if right side is sorted, KEEP M
        # ---- keep min in our search space always 


        # if right side not sorted, eliminate m & get l = m + 1

        while l < r:
            m = l + (r-l)//2

            if nums[m] < nums[r]:
                r = m
            else:
                l = m + 1
        
        return nums[l]
        