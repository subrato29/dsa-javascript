//time: O(N)
//space: O(N)
function arrayOfProducts(array) {
  const product = new Array(array.length).fill(1);
	
	let left = 1;
	for (let i = 0; i < array.length; i++) {
		product[i] = left;
		left *= array[i];
	}
	
	let right = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		product[i] *= right;
		right *= array[i];
	}
	return product;
}
