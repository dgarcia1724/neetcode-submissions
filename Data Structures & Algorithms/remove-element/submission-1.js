class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // remove all occurences of val
        let k = 0;
        for (let i =0; i < nums.length; i++) {
            if (val != nums[i]) { //if NOT EQUAL, then KEEP nums[i]
            // as soon as we hit nums[i] that is equal to val, we KEEP k there so it will be overwritten in
            // future.
                nums[k] = nums[i] 
                k++
            // we only increase k, for all values not equal to val 
            // ex. [1,3,4,5,2] val = 2
            // ---- then k = 3
            }
        }
        return k
    }
}
