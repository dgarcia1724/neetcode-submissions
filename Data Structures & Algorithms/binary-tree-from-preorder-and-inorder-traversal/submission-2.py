class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        # hashmap for O(1) lookup
        inorder_map = {val: i for i, val in enumerate(inorder)}
        
        preorder_idx = 0  # pointer for preorder

        def dfs(left, right):
            nonlocal preorder_idx
            
            if left > right:
                return None

            # root is current preorder value
            root_val = preorder[preorder_idx]
            preorder_idx += 1

            root = TreeNode(root_val)

            # O(1) lookup instead of index()
            mid = inorder_map[root_val]

            # build left subtree
            root.left = dfs(left, mid - 1)
            # build right subtree
            root.right = dfs(mid + 1, right)

            return root

        return dfs(0, len(inorder) - 1)