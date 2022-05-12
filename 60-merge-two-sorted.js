/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// identical to exercise 24, just doing for practice
//  var mergeTwoLists = function(list1, list2) {
//     // define 'walker' variables, used to iterate through each list via list1[x1] and list2[x2]
//     let x1 = 0;
//     let x2 = 0;
//     let result = [];

//     // catch for when both lists are empty arrays
//     if (list1.length === 0 && list2.length === 0) return result;
//     // loop should run while both walkers' values are less than the length of both arrays
//     while (x1 < list1.length && x2 < list2.length) {
//         if (list1[x1] = list2[x2]) {
//             result.push(list1[x1], list2[x2]);
//             x1++;
//             x2++;
//         };

//         if (list1[x1] < list2[x2]) {
//             result.push(list1[x1])
//             x1++;
//         };

//         if (list2[x2] < list1[x1]) {
//             result.push(list2[x2]);
//             x2++;
//         };
//     };

//     // catch for when one list is longer than the other, causing the prior loop to cease firing prematurely.
//     while (x1 < list1.length) {
//         result.push(list1[x1])
//         x1++;
//     };

//     while (x2 < list2.length) {
//         result.push(list2[x2])
//         x2++;
//     };

//     return result;
// };
// this solution functions correctly but leetcode explicitly wants a solution that uses linkedlist logic


var mergeTwoLists = function(list1, list2) {
    var mergedHead = { val : -1, next : null },
        current = mergedHead;
        // while list1 and list2 are not null (they will be null at the tail end of the list)
    while(list1 && list2) {
        if(list1.val > list2.val) {
            // list2.val is smaller so we will make it the next value on 'current'
            current.next = list2;
            // step to the next node on list2
            list2 = list2.next;
        } else {
            current.next = list1;
            list1 = list1.next;
        }
        // step to the next node on 'current'
        current = current.next;
    }
    // this line activates if one list is longer than the other. the remaining nodes of either list1 or list2, whichever is longer, will become the tail end of 'current'
    current.next = list1 || list2;
    
    // editing 'current' also edits 'mergedHead' because of how variable definitions work
    return mergedHead.next;
};

const list1 = [1,2,4];
const list2 = [1,3,4];
// should return [1,1,2,3,4,4]

console.log(mergeTwoLists(list1, list2));