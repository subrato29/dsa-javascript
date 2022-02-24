'use strict';

// The difference between normal function and constructor function, that we call constructor function by 'new' keyword.
const Person = function (firstName, birthYear) {
    console.log (this); // Person {} // empty object return
}

new Person ('Sachin', 1974);

/**
 * 1. new {} is created. {} => empty object
 * 2. function is called, this = {}
 * 3. {} is linked to prototype
 * 4. function automatically return {};
 */

const Person1 = function (firstName, birthYear) {
    //instace properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    //Never create a method inside a constructor function, because if we create 10000 objects of the
    //constructor funtion, then every object will carry this function and the performance will be 
    //terrible
    // this.calcAge = () => {
    //     console.log (2037 - this.birthYear);
    // };
}

const sachin = new Person1 ('Sachin', 1974);
console.log (sachin); //Person1 {firstName: 'Sachin', birthYear: 1974}

console.log (sachin instanceof Person1); //trye