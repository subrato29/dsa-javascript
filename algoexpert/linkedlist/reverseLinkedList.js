//Time complexity: O(n)
//Space complexity: O(1);

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let currentNode = head;
    let prevNode = null;
    while (currentNode != null) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;
}