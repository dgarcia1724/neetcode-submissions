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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head.next

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let second = slow.next
        slow.next = null
        let prev = null
        while (second) {
            let nxt = second.next
            second.next = prev
            prev = second
            second = nxt
        }
        second = prev
        let first = head
        while (second) {
            let tmp1 = first.next
            let tmp2 = second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
        }
    }
}
