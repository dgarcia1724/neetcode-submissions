class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind() 

        for n1, n2 in edges:
            uf.union(n1, n2)
        
        hashset = set()
        for i in range(n):
            hashset.add(uf.findParent(i))
        return len(hashset)

        

class UnionFind:
    def __init__(self):
        self.par = {}
        self.rank = collections.defaultdict(lambda :1)
    
    def findParent(self, x):
        y = self.par.get(x,x)
        if x != y:
            y = self.par[x] = self.findParent(y)
        return y
    
    def union(self, x, y):
        p1, p2 = self.findParent(x), self.findParent(y)
        if p1 == p2:
            return False
        # diff rank
        if self.rank[p1] > self.rank[p2]:
            self.par[p2] = p1
        elif self.rank[p2] > self.rank[p1]:
            self.par[p1] = p2
        # same rank
        else:
            self.par[p1] = p2
            self.rank[p2] += 1

        return True