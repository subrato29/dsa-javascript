/**
 * Pascal's Triangle Oct 28 '12
	Given numRows, generate the first numRows of Pascal's triangle.
	
	For example, given numRows = 5,
	Return
	
	[
	     [1],
	    [1,1],
	   [1,2,1],
	  [1,3,3,1],
	 [1,4,6,4,1]
	]
 */

 let pascalsTriangle = (row) => {
 	let result = new Array(row + 1);
 	let prev = 0;

 	for (let i = 1; i <= row + 1; i++) {
 		for (let j = 0; j < i; j++) {
 			if (j == 0 || j == i - 1) {
 				result[j] = 1;
 				prev = 1;
 			} else {
 				let temp = result[j];
 				result[j] = prev + result[j];
				prev = temp;
 			}
 		}
 	}
 	return result;
 }