class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0
        let lowest = prices[0]

        for (let price of prices) {
            lowest = Math.min(lowest, price)
            res = Math.max(res, price-lowest)
        }
        return res
    }
}