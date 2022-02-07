/**
 * A closure is the combination of a function bundled together (enclosed) with references to its 
 * surrounding state (the lexical environment). In other words, a closure gives you access to an 
 * outer function’s scope from an inner function. In JavaScript, closures are created every time 
 * a function is created, at function creation time.
 */

/**
 * A closure makes sure that a function does not loose connection to variables that existed at the
 * function's birthplace. A closure is an internal property of a function.
 */
 const secureBooking = () => {
    let counter = 0;

    return () => {
        counter++;
        console.log (counter + ' passanger');
    }
}

const booker = secureBooking ();

booker (); //1
booker (); //2
booker (); //3

console.log ('===============');

secureBooking ()(); //1
secureBooking ()(); //1
secureBooking ()(); //1