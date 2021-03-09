
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return helper(tree, -Infinity, Infinity);
}

function helper (tree, minValue, maxValue) {
	if (tree.value < minValue || tree.value >= maxValue) {
		return false;
	}
	if (tree.left!= null && !helper(tree.left, minValue, tree.value)) {
		return false;
	}
	if (tree.right!= null && !helper(tree.right, tree.value, maxValue)) {
		return false;
	}
	return true;
}