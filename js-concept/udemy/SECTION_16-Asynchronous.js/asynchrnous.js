//Synchronous code, because it executes line by line.
const p = document.querySelector('.p');
p.textContent = 'My name is Subrato';
alert('Text set!');
p.style.color = 'red' // this line won't be executed until user press Ok in alert message.

//Asynchronous code
console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000); // Timer with callback
console.log(3); //This line executed first before the previous line.
/**o/p
 * 1
 * 3
 * 2
 */

/**
 * Not all callback functions or callback functions alone don't make javascript automatically 
asynchronous, only certain functions like setTimeout().
 */

//AJAX call is an example to communicate with remote web server asynchronously.