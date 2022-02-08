//Example: 1
let f;

const g = () => {
    const a = 23;
    f = () => {
        console.log (a * 2);
    }
}

const h = () => {
    const b = 50;
    f = () => {
        console.log (b * 2);
    }
}

g();
f(); //46 // closure of g();

//Reassigning f function
h();
f(); //100 // closure of h();

//Example: 2
const boardPassanger = (numPassanger, wait) => {
    const perGroup = numPassanger / 3;
    setTimeout (() => {
        console.log ('Total no of pasaangers: ' + numPassanger);
        console.log ('No of passagers in each group: ' + perGroup);
    }, wait * 1000)
    console.log ('Will start board in: ' + wait);
}
boardPassanger (180, 3);

/**
 * o/p
 * Will start board in: 3
Total no of pasaangers: 180
No of passagers in each group: 60
 */