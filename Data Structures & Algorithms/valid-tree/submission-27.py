class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        uf = UnionFind()

        for node1, node2 in edges:
            if uf.findParent(node1) == uf.findParent(node2):
                return False
            uf.union(node1,node2)
        
        hashset = set()
        for node in range(n):
            hashset.add(uf.findParent(node))
        
        return len(hashset) == 1
        

class UnionFind:
    def __init__(self):
        self.f = {}
    
    def findParent(self,x):
        y = self.f.get(x,x)
        if x!=y:
            y = self.f[x] = self.findParent(y)
        return y
    
    def union(self,x,y):
        self.f[self.findParent(x)] = self.findParent(y)