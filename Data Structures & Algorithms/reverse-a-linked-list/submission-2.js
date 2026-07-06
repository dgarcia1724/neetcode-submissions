/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null, cur = head;

        while (cur) {
            let nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        }
        return prev
    }
}
