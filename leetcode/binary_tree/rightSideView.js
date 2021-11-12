/**
 * 199. Binary Tree Right Side View
Medium

5202

286

Add to List

Share
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []
 */

//Time complexity: O(V + E)
//Space complexity: O(V)
//BFS
var rightSideView = function(root) {
    let visibleValues = [];
    if (root == null) {
        return visibleValues;
    }
    let queue = [];
    queue.push(root);
    while (queue.length != 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let current = queue.shift();
            if (i == size - 1) {
                visibleValues.push (current.val);
            }
            if (current.left != null) {
                queue.push (current.left);
            }
            if (current.right != null) {
                queue.push (current.right);
            }
        }
    }
    return visibleValues;
};