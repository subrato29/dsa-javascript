/**
 * 19. Remove Nth Node From End of List
Medium

6201

339

Add to List

Share
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 */

var removeNthFromEnd = function(head, k) {
    if (head.next == null) {
        return null;
    }
    let first = head;
    let second = head;
    let counter = 1;
    while(counter <= k) {
        second = second.next;
        counter++;
    }
    if(second == null) {
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