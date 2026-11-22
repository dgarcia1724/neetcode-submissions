class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Track the maximum profit and lowest buying price seen so far
        maxP = 0
        minBuy = prices[0]

        # Iterate through each possible selling price
        for sell in prices:
            # Calculate profit if we sell today, and update max profit
            maxP = max(maxP, sell - minBuy)

            # Update the minimum buying price for future transactions
            minBuy = min(minBuy, sell)

        return maxP

# Time: O(n) — single pass through prices
# Space: O(1) — only two variables