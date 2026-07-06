class Solution:
    # Implementation for Kruskal's algorithm to compute Minimum Spanning Trees
    def minimumSpanningTree(self, n: int, edges: List[List[int]]) -> int:
        # Use a min heap to sort the edges
        minHeap = []
        for n1, n2, weight in edges:
            heapq.heappush(minHeap, [weight, n1, n2])

        # Use Union Find to keep track of the connected components
        unionFind = UnionFind()
        res, components = 0, n

        # Pop the edges from the min heap and connect the nodes
        while components > 1 and minHeap:
            weight, n1, n2 = heapq.heappop(minHeap)
            if unionFind.union(n1, n2):
                res += weight
                components -= 1

        # Return -1 if not all nodes are visited (unconnected graph)
        return res if components == 1 else -1


class UnionFind:
    def __init__(self):
        self.par = {}
        self.rank = collections.defaultdict(lambda : 1)
    
    def find(self, x):
        y = self.par.get(x,x)
        if x !=y:
            self.par[x] = y = self.find(y)
        return y
    
    def union(self, x, y):
        p1, p2 = self.find(x), self.find(y)

        if p1 == p2:
            return False
        
        if self.rank[p1] > self.rank[p2]:
            self.par[p2] = p1
        elif self.rank[p2] > self.rank[p1]:
            self.par[p1] = p2
        else:
            self.par[p1] = p2
            self.rank[p2] += 1
        return True