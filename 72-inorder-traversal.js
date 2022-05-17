/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    const result = [];
    console.log(root);
    
    function traverse(node) {
        // every time a node is fed to this recursive function, it is checked to see if it's null.
        if(!node) return;
        
        // feed the next node down the tree
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result;
};
// not original solution

const root = [1,null,2,3];
// should output [1,3,2]

console.log(inorderTraversal(root));

// WALKTHRU: 
// cannot proceed until it is understood how exactly the recursive function traverse() would play out