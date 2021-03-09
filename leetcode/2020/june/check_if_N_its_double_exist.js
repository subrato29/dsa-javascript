let arr = [-2,0,10,-19,4,6,-8];

var checkIfExist = function(arr) {
	let bool = false;
    for (var i = 0; i < arr.length - 1; i++) {
    	for (var j = 0; j < arr.length; j++) {
    		if (i === j) continue;
    		if (arr[i] === arr[j] * 2) {
    			bool = true;
    			break;
    		}
    	}
    }
    return bool;
};

console.log (checkIfExist(arr));