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

//  var middleNode = function(head) {
//     let count = 0;
//     let current = head;

//     while (head !== null) {
//         count++;
//         current = current.next;
//     };

//     if (count % 2 === 0) {
//         current = head;
//         let middle = Math.ceil(count/2);

//         while (middle > 0) {
//             current = current.next;
//             middle--;
//         };

//         return current;
//     } else {
//         current = head;
//         let middle = count/2;

//         while (middle > 0) {
//             current = current.next;
//             middle--;
//         };

//         return current;
//     };

//     // return count;
// };

var middleNode = function(head) {
    let slow = head,
      fast = head;
  
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    console.log(slow);
    return slow;
  };

// var head = [1,2,3,4,5];
var head = [1,2,3,4,5,6];

console.log(middleNode(head));



// Old
    //  let middle = 0;
     
    // if (head.length % 2 === 0) {
    //     // If array length is even, there is no exact middle. We will take the second of the two values.
    //     middle = Math.ceil((head.length / 2 ) + 1);
    // } else {
    //     middle = Math.ceil(head.length / 2);
    // };

    // let result = head.slice(middle-1);
    // return result;
