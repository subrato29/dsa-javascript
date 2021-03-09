//  Single Element in a Sorted Array

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

let num = [3,3,7,7,10,11,11]

 let singleNonDuplicate = function(num) {
    let resultant = [];
    let temp;
    let index;
    let count = 0;
    for (var i = 0; i < num.length; i ++) {
        temp = num[i];
        for (var j = 0; j < num.length; j++) {
            if (j != i) {
                if (temp === num[j]) {
                    count ++;
                    break;
                }
            }
        }
        if (count === 0) {
            resultant.push(temp)
        }
        count = 0;    
     }
     return resultant
  }

 console.log (singleNonDuplicate(num))