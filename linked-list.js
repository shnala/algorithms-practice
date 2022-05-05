// a node should have a value and should have a pointer to the next node.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class LinkedList {
    // head is initialized with a value of null until it is fed an argument
    constructor(head = null) {
        this.head = head;
    };

    // get for returning the number of nodes in the list; 
    size() {
        let count = 0;
        let node = this.head;

        // while node is not null, perform this loop:
        while (node) {
            count++;
            node = node.next;
        };

        return count;
    };
    
    clear() {
        this.head = null;
    };

};

const nodeA = new Node(1);
const nodeB = new Node(3);
// point to the next node manually
nodeA.next = nodeB;

let list = new LinkedList(nodeA);

// logs the whole list, i.e.  Node { val: 1, next: Node { val: 3, next: null } }
console.log(list.head);

// logs Node { val: 3, next: null }
console.log(list.head.next);

// logs 3
console.log(list.head.next.val);

// logs 2
console.log(list.size());

list.clear();

// logs 0 because occurs after list has been cleared
console.log(list.size());