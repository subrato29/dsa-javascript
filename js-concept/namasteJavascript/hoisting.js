func();
func1(); //Uncaught ReferenceError: Cannot access 'func1' before initialization
func2();

function func() {
    console.log('This works as an usual function!!');
}

var func1 = () => {
    console.log('func1 will be initialized as a variable in memory instead of function as it is an arrow function!!');
}

var func2 = function() {
    console.log('func2 will be declared as a variable in memory instead of function as it is an arrow function!!');
}

func1(); // print as usual

/**
 * Hoisting is process in JS to access functions or variable even before they are initialized.
 */