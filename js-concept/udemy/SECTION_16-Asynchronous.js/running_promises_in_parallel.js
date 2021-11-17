//Running promise sequencially
const getResponse = async (id1, id2, id3) => {
    try {
        let res1 = await fetch('https://gorest.co.in/public/v1/users/' + id1);
        const body1 = await res1.json();
        
        res1 = await fetch('https://gorest.co.in/public/v1/users/' + id2);
        const body2 = await res1.json();

        res1 = await fetch('https://gorest.co.in/public/v1/users/' + id3);
        const body3 = await res1.json();

        console.log(body1.data.email, body2.data.email, body3.data.email);
    } catch (err) {
        console.error (err);
    }
}
getResponse('42950', '42954', '42963');

//Running promise in parallel
const getEmail = async (id) => { 
    try {
        const res = await fetch('https://gorest.co.in/public/v1/users/' + id);
        const body = await res.json();
        return body.data.email;
    } catch (err) {
        console.error(err);
    }
}

const getResponse1 = async (id1, id2, id3) => {
    try {
        const res = await Promise.all([getEmail(id1), getEmail(id2), getEmail(id3)]);
        console.log(res);
    } catch (err) {
        console.error (err);
    }
}
getResponse1('50482', '50349', '50579');