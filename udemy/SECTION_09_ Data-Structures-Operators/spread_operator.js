//Spread operator(...)
const arr = [5, 6, 8];
const newArr = [1, 2, ...arr];
console.log(newArr); //[1, 2, 5, 6, 8]
console.log(...newArr); //1 2 5 6 8 // When we need elements of an array individually, we use spread operator
console.log([...newArr]); //[1, 2, 5, 6, 8] // a new copy of array

const newArr1 = [1, 2, arr];
console.log(newArr1); //[1, 2, Array(3)]

//join 2 arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const output = [...arr1, ...arr2];
console.log(output); //[1, 2, 3, 4, 5, 6]
console.log(...arr1, ...arr2); //1 2 3 4 5 6

//Iterables: arrays, strings, map, set but NOT objects
const str = 'Subrato';
console.log(...str); //S u b r a t o
let letters = [...str];
console.log(letters); //["S", "u", "b", "r", "a", "t", "o"]

letters = [...str, ' ', 'H'];
console.log(letters); //["S", "u", "b", "r", "a", "t", "o", " ", "H"]
