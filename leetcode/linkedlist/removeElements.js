/**
 * 203. Remove Linked List Elements
Easy

2992

129

Add to List

Share
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
 */
var removeElements = function(head, val) {
    if (head == null) {
        return null;
    }
    currentNode = head;
    while (currentNode != null && currentNode.val === val) {
        currentNode = currentNode.next;
        head = currentNode;
    }
    while (currentNode != null) {
        nextNode = currentNode.next;
        while (nextNode != null && nextNode.val === val) {
            nextNode = nextNode.next;
        }
        //removing maching node and traversing to next;
        currentNode.next = nextNode;
        currentNode = nextNode;
    }
    return head;
};