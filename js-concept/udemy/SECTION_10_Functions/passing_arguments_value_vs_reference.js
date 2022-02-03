const flight = 'LH123';
const jonas = {
    name: 'Jonas S',
    passpost: 1234567
}

const checkIn = function (flightNum, passanger) {
    flightNum = 'LH000';
    passanger.name = 'Mr. ' + passanger.name;

    if (passanger.passpost == 1234567) {
        alert ('Passport verified');
    } else {
        alert ('Passport not verified');
    }
}

checkIn (flight, jonas);
console.log (flight);
console.log (jonas);
/**
 * o/p
 * LH123 // value did not change because 'flight' variable is primitive
{name: 'Mr. Jonas S', passpost: 1234567}
name: "Mr. Jonas S" // value gets changed because 'jonas' is a reference variable. 'passanger' and 'jonas' are pointing towards same object in memory heap.
passpost: 1234567
[[Prototype]]: Object
 */

const newPassport = function (person) {
    person.passpost = Math.trunc (Math.random() * 10000000);
}

newPassport (jonas);
checkIn (flight, jonas);

/**
 * JS does not have passing by reference, only have passing by value. Though we pass a reference to a
 * JS function but we do not pass by reference.
 */