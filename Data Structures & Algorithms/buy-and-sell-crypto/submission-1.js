class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let lowest = prices[0];

        for (let p of prices) {
            lowest = Math.min(lowest, p);
            res = Math.max(res, p - lowest);
        }
        return res;
    }
}