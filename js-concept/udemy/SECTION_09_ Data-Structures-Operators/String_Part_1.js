const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2

console.log(airline.indexOf('A')); //1
console.log(airline.lastIndexOf('A')); //4
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air

//Fetching 1st word
console.log(airline.slice(0, airline.indexOf(' '))); //TAP

//Fetching last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

//counting from last
console.log(plane.slice(-2)); //20

//Boxing- converting a string into a string object
console.log(new String('Subrato'));
/** o/p
 * String {'Subrato'}
0: "S"
1: "u"
2: "b"
3: "r"
4: "a"
5: "t"
6: "o"
 */

console.log(typeof new String('Subrato')); //object
console.log(typeof new String('Subrato').slice(1)); //string


let string = '10101';
console.log(typeof (string.charAt(1))); //string
console.log(typeof (string.charAt(1) - '0')); //number