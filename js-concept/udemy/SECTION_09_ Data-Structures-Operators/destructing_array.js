//Destructuring array

const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const[x, y, z] = arr; //Destructuring of array, but it's not an array
console.log(x, y, z); // 2 3 4
console.log(arr) // original array won't be disturbed

const[a, , c] = arr;
console.log(a,c); //2 4

//Swap by destructuring
let arr1 = [2, 3];

let [first, second] = arr1;
console.log(first, second); //2 3
[first, second] = [second, first];

console.log(first, second); //3 2

//Nested array destructuring
const nestedArray = [2, 4, [5, 7]];
const[i, , j] = nestedArray;
console.log(i, j); //2 [5, 7];

const[x1, ,[y1, z1]] = nestedArray;
console.log(x1, y1, z1); //2 5 7

//Default values
const[a1 = 1, b1 = 1, c1 = 1] = [8, 9];
console.log(a1, b1, c1);