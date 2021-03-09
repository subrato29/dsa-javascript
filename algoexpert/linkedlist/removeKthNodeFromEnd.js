/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

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
//Time complexity: O(n), where n is the length of the linkedlink
//Space complexity: O(1);

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd (head, k) {
    let counter = 1;
    let first = head;
    let second = head;
    while(counter <= k) {
        second = second.next;
        counter++;
    }
    if(second == null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }
    while (second.next != null) {
        first = first.next;
        second = second.next;
    }
    first.next = first.next.next;
}