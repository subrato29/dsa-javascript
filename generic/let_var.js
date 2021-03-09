
/**
	Using var
*/
function func() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
}


/**
	Using var
*/

function func() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000)
        }
        close(i);
    }
}