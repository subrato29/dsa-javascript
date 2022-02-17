let arr = ['a', 'b', 'c', 'd', 'e'];
 
//slice: creates another array, but does not hamper original array
console.log (arr.slice (2)); //['c', 'd', 'e']
console.log (arr); // ['a', 'b', 'c', 'd', 'e'] - does not change the original array
console.log (arr.slice (2, 4)); //['c', 'd']
console.log (arr.slice (-2)); //['d', 'e']
console.log (arr.slice (-1)); //['e']
console.log (arr.slice ()); //['a', 'b', 'c', 'd', 'e'] //equivalent to [...arr]

//splice: creates another array, but changes original array as well.
console.log (arr.splice (2)); //['c', 'd', 'e']
console.log (arr); // ['a', 'b'] - does not change the original array
console.log (arr.splice (-1)); //['e']

//restrore
arr.reverse();
console.log (arr); //['e', 'd', 'c', 'b', 'a']

//concat
arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = ['f', 'g', 'h']
const letters = arr.concat (arr1);
console.log (letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log ([...arr, ...arr1]); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
console.log (letters.join (' - ')); //a - b - c - d - e - f - g - h