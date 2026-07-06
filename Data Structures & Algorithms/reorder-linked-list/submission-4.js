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
        let slow = head, fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let list2 = slow.next
        slow.next = null
        let prev = null
        while (list2) {
            let nxt = list2.next
            list2.next = prev
            prev = list2
            list2 = nxt
        }
        let list1 = head
        list2 = prev
        while (list2) {
            let tmp1 = list1.next
            let tmp2 = list2.next
            list1.next = list2
            list2.next = tmp1
            list1 = tmp1
            list2 = tmp2
        }

    }
}
