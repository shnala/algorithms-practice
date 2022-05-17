/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// return 'true' if both trees 'p' and 'q' have the same structure and node values. otherwise, return 'false;
// create a stack for tree 'p' and then compare the arrays
 var isSameTree = function(p, q) {
    const map = [];

    function traverse(node) {
        if (!node) return;

        traverse(node.left);
        map.push(node.val);
        traverse(node.right);
    }
    traverse(p);
    return map;
};

//wip (lol)