/**
 * 83. Remove Duplicates from Sorted List
Easy

2852

154

Add to List

Share
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
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
 * @return {ListNode}
 */
var deleteDuplicates = function(linkedList) {
    let currentNode = linkedList;
    while(currentNode != null) {
        let nextDistinctNode = currentNode.next;
        while(nextDistinctNode != null && nextDistinctNode.val === currentNode.val){
            nextDistinctNode = nextDistinctNode.next;
        }
        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    }
    return linkedList;
};