
const lotteryPromise = new Promise ((resolve, reject) => {
    console.log('Lottery draw is happending..')
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve('You win...');
        } else {
            reject(new Error ('You lost...'));
        }
    }, 1000)
});

lotteryPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});

//Promisifying timeout
const wait = ((seconds) => {
    return new Promise((resolve) => {
        setTimeout (resolve, seconds * 500);
    });
});

wait(1).then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
}).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
}).then(() => {
    console.log('I waited for 4 second');
})


Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => {
    console.error(x);
});