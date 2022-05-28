// linked list without comments, for leetcode problems
// doesn't work
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class LinkedList {
    constructor(head = null) {
        this.head = head;
    };

    add(element) {
        let node = this.head
        while (node.next) {
            node = node.next;
        };
        node.next = new Node(element);
    };



}

const list = new LinkedList();
list.add(3)
console.log(list);