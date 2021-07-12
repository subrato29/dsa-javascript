/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
 */

class TreeNode {
    TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isSymmetric(root) {
    if (root == null) {
        return true;
    }
    return isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(left, right) {
    if (left == null && right == null) {
        return true;
    } else if (left == null || right == null) {
        return false;
    }
    return (left.val == right.val) && (isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left));
}