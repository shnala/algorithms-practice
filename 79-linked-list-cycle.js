/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// linked list has an internal cycle IF the tail node points to a previous node
// count nodes in 'head'
// if node[head.length] !== null, then the tail is not pointing towards null but rather towards another node, indicating that it is a cycle
 var hasCycle = function(head) {
    console.log(head.length);
    let steps = 0
    let current = head;
    while (steps !== head.length) {
        // current = current.next;
        // this simple loop exceeds time limit on leetcode? Don't understand, there isn't anything wrong with it
        steps++;
    };

    // console.log(current.val);
    // console.log(current.next);
    console.log(steps);
};

const head = [3,2,0,-4];
console.log(hasCycle(head));