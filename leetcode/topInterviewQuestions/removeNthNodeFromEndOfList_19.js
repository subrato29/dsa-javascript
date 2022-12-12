/**
 * 19. Remove Nth Node From End of List
 * Medium
 * 14.1K
 * 580
 * Companies
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: head = [1], n = 1
 * Output: []
 *
 * Example 3:
 * Input: head = [1,2], n = 1
 * Output: [1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if (head.next == null) {
        return null;
    }
    let first = head;
    let second = head;
    let counter = 1;
    while (counter <= n) {
        second = second.next;
        counter++;
    }
    if (second == null) {
        head.val = head.next.val;
        head.next = head.next.next;
        return head;
    }
    while (second.next != null) {
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;
    return head;
};