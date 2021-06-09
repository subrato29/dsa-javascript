// Higher-order function: A function which takes another function as an argument or returns a functions from it, called higher-order function.
// Functional Programming is powered by Higher-Order Functions in JavaScript.

// x is called callback function
function x() {
    console.log("x");
}

// y is called higher order function
function y(x) {
    x();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const radius = [3, 1, 2, 4];

const area = function(radius) {
    return Math.PI * radius * radius;
};

const circumference = function(radius) {
    return 2 * Math.PI * radius;
};

const diameter = function(radius) {
    return 2 * radius;
};

const calculate = function (array, logic) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(logic(array[i]));
    }
    return output;
}

console.log(radius.map(area)); // calculate() works almost similar like map()

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));