/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// find length of list
// find middle of list
// assess if left and right sides of middle are the reverse of each other

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var isPalindrome = function (head) {
    let string1 = string2 = "";
    let node = head;
    
      while(node !== null){
          string1 = `${string1}${node.val}`;
          string2 = `${node.val}${string2}`;
          node = node.next;
      }

      console.log(string1)
      console.log(string2)
      return string1 === string2;
};

const arr = [1, 2, 2, 1];
const head = new ListNode(arr);

console.log(isPalindrome(head));