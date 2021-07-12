
// Function expression

// Anonymous function
//====================================
let sum = function(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 5));


// Arrow function
//===================================
let greet = () => {
    console.log('Hello greet');
    return 1;
}

console.log(greet());
//output 
// 'Hello greet'
//1

console.log(greet);
//output
/**
 * () => {
    console.log('Hello greet');
    return 1;
}
 */