class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        uf = UnionFind()

        for n1,n2 in edges:
            if not uf.union(n1, n2):
                return False
            # if uf.find(n1) == uf.find(n2):
                # return False
        
        hashset = set()

        for i in range(n):
            hashset.add(uf.find(i))
        return 1 == len(hashset)
        
        



class UnionFind:
    def __init__(self):
        self.parents = {}
        self.rank = collections.defaultdict(lambda :1)
    
    def find(self, x):
        y = self.parents.get(x, x)
        if x != y:
            y = self.parents[x] = self.find(y)
        return y
    
    def union(self, node1, node2):
        p1, p2 = self.find(node1), self.find(node2)
        if p1 == p2:
            return False
        
        if self.rank[p1] > self.rank[p2]:
            self.parents[p2] = p1
        elif self.rank[p2] > self.rank[p1]:
            self.parents[p1] = p2
        else:
            self.parents[p2] = p1
            self.rank[p1] += 1
        return True
        

