let sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 3));

// one liner, you write and omit return statement, if this is a one liner code
let add = (a, b) => a + b;
console.log(add(2, 3));

//Soring array
let arr = [5, 4, 7, 2, 3];
arr.sort((a, b) => a - b);

console.log(arr)