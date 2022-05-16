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

var deleteDuplicates = function (head) {
    let current = head;
    console.log(current);

    while (current) {
        if (current.next !== null && current.val === current.next.val) {
            // if the current value is the same as the next value, the next value will be set to the next-next value.
            current.next = current.next.next
        } else {
            // if the current value is not the same as the next value, the current value will be set to the next value.
            current = current.next
        }
    }

    return head
};
// not an original solution; faster than 79%, smaller than 6%

const head = [1, 1, 2, 3, 3];
// should return [1,2,3]
// while current is not null (i.e. while we are not at the tail-end of the list), check if the NEXT value is null, and whether current is the same as next.

// current is 1, next is 1; since they are the same, next will be set to next-next, which is 2; 'x' represents the current node.
// ['1', (1), (2), 3, 3]
// ['1', (2), _, 3, 3]
// ['1', 2, 3, 3]

// current is still 1; however now, current.next is 2, so we may proceed to the next node. The else statement is triggered, setting current to current.next
// [1, '2', 3, 3]

// current is 2; next is 3; else statement triggered, proceed to next node
// [1, 2, '3', 3]

// current is 3, next is 3; since they are the same, NEXT is set to NEXT-NEXT, which is null
// [1 ,2, '3', null]
// since current.next is now null, we are at the end of the list, and the loop will stop firing, and 'head' will be returned.
console.log(deleteDuplicates(head));