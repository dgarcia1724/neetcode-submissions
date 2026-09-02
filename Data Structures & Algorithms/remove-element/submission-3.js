class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) { //Very simply, EVERY time we encounter element that we want to keep, we overwrite nums[k] to keep it. SO ENTIRE left side will be elements NOT EQUAL to val (element we are getting rid of).

                nums[k] = nums[i]
                k++ // k will increase by 1, every time we save value we want to keep.
            } 
            // everytime, we encounter nums[i] == val, we keep k same, DONT k++ to later overwrite 
            //it with value we want to keep 👍 
            // But we only care about 1st k elements in res!!! Later values can be kept as is. 
            // --We already take care of this, bc ⭐⭐⭐we have moved every value that we want to keep to leftside
            //-- by definition & we did this k times, SO ARE ANSWER IS PERFECT!!! ⭐⭐⭐

        }
        return k
    }
}
