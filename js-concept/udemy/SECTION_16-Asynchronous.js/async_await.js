//try...catch
try {
    const x = 3;
    x = 2;
} catch(err) {
    console.log(err.message);
}

const getResponse = async function () {
    try {
        const res = await fetch('https://gorest.co.in/public/v1/users');
        const body = await res.json();
        return body;
    } catch (err) {
        console.error (err.message);
        return err;
    }
}

getResponse().then((res) => {
    console.log(res);
}).catch ((err) => {
    console.error(err.message);
}).finally (() => {
    console.log('final block executed');
})

//NOT WORKING
/*
(async function() {
    try {
        const res = await getResponse();
        console.log(res);
    } catch (err) {
        console.log(err.message);
    }
    //console.log('final block executed');
})();
*/