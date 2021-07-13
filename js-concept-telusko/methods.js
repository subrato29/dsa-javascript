//laptop is an object
let laptop = {
    name : 'mac',
    ram : '4gb',
    cpu : 'i7',

    output: function() {
        console.log('Working fine');
    }
}

//console.log(output()); //Uncaught ReferenceError: output is not defined
console.log(laptop.output());