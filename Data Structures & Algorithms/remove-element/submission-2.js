class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // ⭐remove all occurences of val⭐
        let k = 0;
        for (let i =0; i < nums.length; i++) { 
            if (nums[i] == val) { //nums[i] is equal to value we want to remove.
                continue
                // we continue & keep k behind i,
                //so that we can replace nums[k] with a future value that is not equal to val.
            } 
            //❤️if NOT EQUAL, then overwrite nums[k] with nums[i] to move element that is not equal to 
            // val (the one we want to remove) to the leftside replacing nums[k] which was an element equal to val (the one we want to remove). 
            
            //nums[k] will always be behind or at same spot as nums[i]. 
            // If at same spot, then same value is overwritten that we want to keep. 🤷‍♂️
            nums[k] = nums[i] 
            k++
            // ⭐whenever nums[i] == val, we do not do k++, SO WE CAN REMOVE val from beginning of array⭐! ❤️REPLACE nums[k] later with the 
            // nums[i] that was not equal to val❤️
        }
        return k // k is total number of elements not equal to val 

        //NOTE: we are okay with last element(s) being = to val as we only care about begining of array 
        // before k 
        // example: [8,1,2,3,4,8,8,8] val = 8 (8 is what we want to remove from array in place.)
        // res = [1,2,3,4,4,8,8,8] k = 4 bc 4 elements not equal to val, we don't care about anything from 
        //index k onwards, only care about index 0-3 [1,2,3,4] aka all elements not equal to val. 
        // The leftover 4,8,8,8 is dead space.
    }
}
