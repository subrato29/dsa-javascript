
function findClosestValueInBst(tree, target) {
	return helper(tree, target, tree.value);
}

function helper(tree, target, closest) {
	let currNode = tree;
	while (currNode != null) {
		if (Math.abs(target - closest) > Math.abs(target - currNode.value)) {
			closest = currNode.value;
		}
		if (target < currNode.value) {
			currNode = currNode.left;
		} else if (target > currNode.value) {
			currNode = currNode.right;
		} else {
			break;
		}
	}
	return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}