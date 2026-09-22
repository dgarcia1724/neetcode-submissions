class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Key idea: we can make unlimited trades, so the profit from any rise
        // (e.g. 1 -> 5) equals the sum of its daily increases (1->2, 2->3, ...).
        // So we just collect every positive day-to-day difference.
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            // If today's price is higher than yesterday's, "buy yesterday, sell today"
            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
            // If the price dropped, skip it. We never want to hold through a loss.
        }

        // Time: O(n) - single pass
        // Space: O(1) - only one variable
        return profit;
    }
}