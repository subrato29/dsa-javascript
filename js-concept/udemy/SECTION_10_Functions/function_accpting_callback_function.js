const oneWord = function (str) {
    return str.replace (/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split (' ');
    return [first.toUpperCase(), ...others].join (' ');
}

//Higher order function
const transformer = function (str, fn) {
    console.log ('Original string: ' + str);
    console.log ('Transformed string: ' + fn (str));
    console.log ('Name of passing function: ' + fn.name);
}

transformer ('Hello world', upperFirstWord); 
// transformer: higher order function
// upperFirstWord: callback function

/** o/p
 * Original string: Hello world
Transformed string: HELLO world
Name of passing function: upperFirstWord
 */

transformer ('Hello world', oneWord);
/** o/p
 * Original string: Hello world
Transformed string: helloworld
Name of passing function: oneWord
 */