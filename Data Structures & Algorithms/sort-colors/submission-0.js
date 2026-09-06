class Solution {

    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    sortColors(nums) {
        let l = 0, r = nums.length - 1;
        let i = 0;

        const swap = (i, j) => {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        };

        while (i <= r) { // we are done when i passes r. i evaluates every element & r only moves left when 2 is swapped (everything on right of r will be 2s/Out of bounds aka ALREADY EVALUATED. We know i evaluates every index, so after r is evaluated by i, then every index has been evaluated & we are done.)(After i evaluates r, & therefore passes r, everything has been evaluated & we are done. Bc everything to right of r already evaluated.) 
        // so might look like [0,0,1,1,i,r,2] when i passes r we are done.

            if (nums[i] === 0) {
                swap(l, i);
                l++;
            }

            //⭐everything to left of l & right of r has already been evaluated.⭐

            //only when we encounter 0 or 2 do we put them in their proper place.
            //--- l stays when don’t encounter 0
            //--- r stays when don’t encounter 2

            if (nums[i] === 2) {
                swap(i, r);
                r--;
                i--; // To prevent i from moving on & potentially skipping a 0 (that was swapped there when i encountered a 2)
            }

            // No need for i-= 1 when l += 1 bc everything before i has already been evaluated (which includes when l is at i bc i is being evaluated right now)

            i++;
        }

        //--- Example of i accidentally skipping 0
        //don't increment i when encounter 2
        //---- bc we swap r with i then i+=1 & r-=1
        //---- r could have been 0 & i was 2, so we swapped them making i=0 and r=2
        //---------------Then i+=1, so we potentially skipped putting a 0 on the left side
        //---------------Don't increment i, so that we go over that 0 in the next iteration & put it on the left side 👍
    }

}