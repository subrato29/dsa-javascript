const greet = function (greetType) {
    return function (name) {
        console.log (greetType + ' ' + name);
    }
}

const greeterHey = greet ('Hi');
greeterHey ('Subrato');
greeterHey ('Mouli');

//Equivalent to
greet ('Hello')('Jonus');

const greet1 = (greetType) => {
    return (name) => {
        console.log (greetType + ' ' + name);
    }
}

const greet2 = greetType => name => console.log (greetType + ' ' + name);

//Using arrow
greet2 ('Hello')('Arrow2');