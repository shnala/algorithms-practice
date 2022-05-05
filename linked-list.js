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

        // method for adding a new node to the end of the linked list
        this.add = function(element) {
            
        }
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