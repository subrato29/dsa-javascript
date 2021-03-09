// Function statement & function declaration
function function_statement() {
    console.log('calling function_statement');
}

// Function expresession
var function_expression = function() {
    console.log('calling function_expression');
}

function_statement();
function_expression();

// Anonymous function.. like in Function expresession
function () {

}

// Named Function expresession
var named_function_expression = function function_name() {
    console.log('calling function_expression');
}

// First class function --- Ability to be use like values
var first_class_func = function (param1) {
    return function xyz() {
        console.log ('calling xyz')
    }
}
console.log (first_class_func());