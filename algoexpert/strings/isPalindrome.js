function isPalindrome(string) {
  let reverse = '';
	for (let i = string.length - 1; i >= 0; i--) {
		reverse = reverse + string[i];
	}
	return string === reverse;
}


//better approach
//	time: o(n)
//	space: o(1)
function isPalindrome(string) {
  let left = 0;
	let right = string.length - 1;
	while (left < right) {
		if (string[left] != string[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}