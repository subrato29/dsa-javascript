//Time complexity: O(n)
//Space complexity: O(1)

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function shiftLinkedList (head, k) {
    if (head === null) {
        return head;
    }
    let listLength = 1;
    let traversingListNode = head;
    while (traversingListNode.next !== null) {
            traversingListNode = traversingListNode.next;
            listLength++;
    }
    let offset = Math.abs(k) % listLength;
    if (offset === 0) {
            return head;
    }
    let newTailPosition = 0
    if (k > 0) {
            newTailPosition = listLength - offset;
    } else {
            newTailPosition = offset;
    }
    let newTail = head;
    for (let i = 1; i < newTailPosition; i++) {
            newTail = newTail.next;
    }
    const newHead = newTail.next;
    newTail.next = null;
    traversingListNode.next = head;

    return newHead;
}