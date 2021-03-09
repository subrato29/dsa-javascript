//Time complexity: O(n)
//Space complexity: O(1)

function findThreeLargestNumbers(array) {
    const result = [0, 0, 0];
    for (let i = 0; i < array.length; i++) {
       updateLargest(result, array[i]);
    }
    return result;
}

//Traversing each element in result array 
function updateLargest(array, num) {
   if (array[2] === 0 || num > array[2]) {
       shiftAndUpdate(array, num, 2);
   } else if (array[1] === 0 || num > array[1]) {
       shiftAndUpdate(array, num, 1);
   } else if (array[0] === 0 || num > array[0]) {
       shiftAndUpdate(array, num, 0);
   }
}

//updating target indexing element by largest and shifting element from right to left
function shiftAndUpdate(array, num, index) {
   for (let i = 0; i <= index; i++) {
       if (i === index) {
           array[i] = num;
       } else {
           array[i] = array[i + 1];
       }
   }
}

let array = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7];
console.log(findThreeLargestNumbers(array));