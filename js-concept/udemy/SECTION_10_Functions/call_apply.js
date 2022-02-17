const flight = {
    airline: 'Aircanada',
    iataCode: 'LH',
    bookings: [],
    book (flightNum, name) {
        console.log ('Name of passager: ' + name + ' & airline '
        + 'name: ' + this.airline);
    this.bookings.push ({flight: this.iataCode} + 
        + {flightNo: flightNum})
    }
 };

 flight.book (287, 'Subrato');
 flight.book (645, 'David');
 console.log (flight);

 const flightAnother = {
     airline: 'Delta',
     iataCode: 'GT',
     bookings: []
 };

 const book = flight.book;

 //CALL method
 book.call (flight, 111, 'Williams');
 console.log (flight);

 book.call (flightAnother, 111, 'Williams');
 console.log (flightAnother);

 //APPLY method, the difference with CALL method is it takes array as arguments
 const flightData = [344, 'George Cooper'];
 book.apply (flightAnother, flightData);
 console.log (flightAnother);

 book.call (flightAnother, ...flightData) // exactly same as line 34