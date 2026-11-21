class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Use prefix and postfix products without division
        res = [1] * len(nums)

        # First pass: store the product of all elements to the left
        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]

        # Second pass: multiply by the product of all elements to the right
        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]

        return res

        # Time: O(n) — two passes through the array
        # Space: O(1) auxiliary — only prefix and postfix variables
        # Output: O(n) — result array