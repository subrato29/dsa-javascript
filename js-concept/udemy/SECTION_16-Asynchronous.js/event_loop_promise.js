console.log('start'); //output- 1
setTimeout(() => console.log('0 sec timer'), 0); //output- 4 // timer function
Promise.resolve('Resolved promise 1').then(res => console.log(res)); //output- 3(Precedence over 
//line 2 because of resolved promise in micro task queue, and line 2 will be call back queue)
console.log('end'); //output- 2

Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log(res);
})

/** o/p
 *  script.js:1 start
    script.js:5 end
    script.js:3 Resolved promise 1
    script.js:9 Resolved promise 2
    script.js:2 0 sec timer
 */

//Micro task queue has a higher precedence to execute over call back queue.