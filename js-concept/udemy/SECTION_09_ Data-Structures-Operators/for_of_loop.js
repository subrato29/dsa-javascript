let arr = [4, 5, 2, 8, 3];
for (let ele of arr) console.log(ele); //4, 5, 2, 8, 3

for(let ele of arr.entries()) console.log(ele);
/**
 * o/p:
 *  (2) [0, 4]
    (2) [1, 5]
    (2) [2, 2]
    (2) [3, 8]
    (2) [4, 3]
 */

for(let ele of arr.entries()) console.log(ele[0] + ' : ' +ele[1]); //old school
//OR
for(let [i, ele] of arr.entries()) console.log(i + ' : ' +ele); // by destructuring
/**
 *  0 : 4
    1 : 5
    2 : 2
    3 : 8
    4 : 3
 */