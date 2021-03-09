//Trust issues of setTimeout()

console.log('start');

setTimeout(() => {
    console.log('setTimeout');
}, 5000)

console.log('end')

let start = new Date().getTime();
let end = start;
while(end < start + 10000) {
    end = new Date().getTime();
}

console.log('While loop ended')

//output
//=============
// start
// end
// While loop ended
// setTimeout
