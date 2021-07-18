const data = [8, 2, 3, 5, 8, 2, 2, 5, 6];
console.log(data); // [8, 2, 3, 5, 8, 2, 2, 5, 6]

const uniqueData = [...new Set(data)];
console.log(uniqueData); // [8, 2, 3, 5, 6]

//**************************************************************************** */

const arr = new Array(12).fill(2);
console.log(arr); //[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

//******************************************************************************* */

let a = 3;
let b = 4;
console.log(a + ":" + b); // 3:4

[a, b] = [b, a];
console.log(a + ":" + b); // 4:3