/*
let arr = [1,2,5,8];
let resultant = [];
let target = 9;
*/

let twoSum = function(arr, target) {
    let resultant = [];
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i];
        for (var j = 0;j< arr.length; j++) {
            if (j != i) {
                if(temp + arr[j] === target) {
                    resultant.push(j)
                }
            }
        }
    }   
    return resultant.sort()
}

console.log(twoSum([1,2,5,8], 9));