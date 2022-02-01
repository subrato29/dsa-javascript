'use strict'

const bookingAll = [];

const createBooking = function (flightNum, numPassangers = 1, price = 199) {
    const booking = {
        flightNum,
        numPassangers,
        price
    };
    console.log (booking);
    bookingAll.push(booking);
}

createBooking ('LH123');
/**
 * o/p: with createBooking ('LH123');
 * {flightNum: 'LH123', numPassangers: 1, price: 199}
flightNum: "LH123"
numPassangers: 1
price: 199
[[Prototype]]: Object
 */

createBooking ('AH344', 2, 250);
/**
 * o/p: with createBooking ('AH344', 2, 250);
 * {flightNum: 'LH123', numPassangers: 1, price: 199}
flightNum: "LH123"
numPassangers: 2
price: 250
[[Prototype]]: Object
 */