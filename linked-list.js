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
            // TODO: Where exactly does the .next method get translated over from the Node class?
            node = node.next;
        };

        return count;
    };
    
    // set the head to null, effectively clearing the linked list of all its trailing values
    clear() {
        this.head = null;
    };


    // returns the last node of the linked list
    getLast() {
        // initialize lastNode with value of head
        let lastNode = this.head;
        // if lastNode is not null (i.e. if head is not 'empty') perform this code
        if (lastNode) {
            // while the NEXT node after lastNode is not null, perform this loop. If the NEXT node after lastNode is null, then we are at the end of the linked list.
            while (lastNode.next) {
                // since this loop stops right at the second to last node, lastNode will be set to the last node.
                lastNode = lastNode.next;
            };
        };

        return lastNode;
    };

    // returns the first node of the linked list
    getFirst() {
        return this.head;
    }

    // method for adding a new node to the list
    add(element) {
        let node = this.head
        // while the NEXT node is not null, run this loop
        while (node.next) {
            node = node.next;
        };

        // at this point the loop has ended and we are positioned at the end of the linked list, just before null. We will set node.next (which is currently null) to be the new Node(element)
        node.next = new Node(element);
    };

};

const nodeA = new Node(1);
const nodeB = new Node(3);
// point to the next node manually
nodeA.next = nodeB;

// IMPORTANT: nodeA becomes the head of the new LinkedList, 'list'. nodeA retains all the properties of the Node class, i.e. this.val and this.next
let list = new LinkedList(nodeA);

// logs the whole list, i.e.  Node { val: 1, next: Node { val: 3, next: null } }
// console.log(list.head);

// logs Node { val: 3, next: null }
// console.log(list.head.next);

// logs 3
// console.log(list.head.next.val);

// logs 2
// console.log(list.size());

// empties the linked list
// list.clear();

// logs 0 because occurs after list has been cleared
// console.log(list.size());

// console.log(list.getLast());
// console.log(list.getFirst());

console.log(list.add(5));
console.log(list.size());


// Old add() method for reference. 
    // method for adding a new node to the list
    // add(element) {
    //     let node = this.head
    //     // while node is not null, run this loop
    //     while (node) {
    //         if (!node.next) {
    //             node.next = new Node(element);
    //         };

    //         node = node.next;
    //     }
    //     return;
    // }