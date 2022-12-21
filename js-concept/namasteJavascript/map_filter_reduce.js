const arr = [1, 2, 3, 4, 5];

/**
 * 
 * map() function is used to transform an array and get an array
 */

function double(x) {
    return x * 2;
}
function binary(x) {
    return x.toString(2);
}

let output = arr.map(double);
//OR another way of writing
output = arr.map(function double(x) {
    return x * 2;
});
//OR another way of writing using arrow function
output = arr.map((x) => x * 2);

console.log(output);

output = arr.map(binary);
console.log(output);

/**
 * filter()
 */
function isOdd (x) {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}

output = arr.filter(isOdd);
console.log(output);

//OR another way of writing
output = arr.filter(function isOdd (x) {
    if (x % 2 === 0) {
        return true;
    }
    return false;
});
console.log(output);

/**
 * reduce()
 */
function findSum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}
console.log(findSum(arr));

const sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);
console.log(sum);

const findMax = arr.reduce((max, curr) => {
    if(max < curr) {
        max = curr;
    }
    return max;
}, 0);
console.log(findMax);