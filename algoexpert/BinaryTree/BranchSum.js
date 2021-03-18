//Time complexitu: O(n)
//Space complexity: O(n)

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function branchSum(root) {
    let sum = [];
    calculateBranchSum(root, 0, sum);
    return sum;
}

function calculateBranchSum (root, runningSum, sum) {
	if (root == null) {
		return;
	}
	runningSum = runningSum + root.value;
	if(root.left == null && root.right == null) {
		sum.push(runningSum);
		return;
	}
	calculateBranchSum(root.left, runningSum, sum);
	calculateBranchSum(root.right, runningSum, sum);
}