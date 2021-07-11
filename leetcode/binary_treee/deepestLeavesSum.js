/**
 * 1302. Deepest Leaves Sum
Medium

1622

62

Add to List

Share
Given the root of a binary tree, return the sum of values of its deepest leaves.

Example 1:
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Example 2:
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
 */
var deepestLeavesSum = function(root) {
    let map = new Map();
    helper(root, 0, map);
    let array = Array.from(map.keys());
    let sortedArray = array.sort((a, b) => {
        return a - b;
    })
    return map.get(sortedArray[sortedArray.length - 1]);
};

function helper (node, depth, map) {
    if (node == null) {
        return;
    }
    if (node.left == null && node.right == null) {
        if (map.has(depth)) {
            map.set(depth, map.get(depth) + node.val);
        } else {
            map.set(depth, node.val);
        }
        return;
    }
    helper (node.left, depth + 1, map);
    helper (node.right, depth + 1, map);
}