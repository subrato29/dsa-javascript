//Callback hell
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

//To resolve a problem of callback hell, concept of Promise comes