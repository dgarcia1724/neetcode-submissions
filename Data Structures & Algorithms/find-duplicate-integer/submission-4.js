class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // linked lists 

        // start at 0
        let slow = 0
        let fast = 0

        // fast & slow pointer
        while (true) {
            slow = nums[slow]
            fast = nums[nums[fast]]
            if (slow === fast) break
        }
        // meeting point 

        // once we have detected, cycle

        // new slow 2
        let slow2 = 0
        // traverse until intersect & then return index that they intersect
        while (slow !== slow2) {
            slow = nums[slow]
            slow2 = nums[slow2]
        }
        return slow2
    }
}
