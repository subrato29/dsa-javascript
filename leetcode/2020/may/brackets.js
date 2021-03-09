let s = '{(})['

let isValid = function(input) {
    let bool = true;
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        if (input.includes('(')) {
            index = input.indexOf('(');
            if (input.charAt(index + 1) !== ')') {
                bool = false;
                break;
            }
        }
        if (input.includes('{')) {
            index = input.indexOf('{');
            if (input.charAt(index + 1) !== '}') {
                bool = false;
                break;
            }
        }
        if (input.includes('[')) {
            index = input.indexOf('[');
            if (input.charAt(index + 1) !== ']') {
                bool = false;
                break;
            }
        }
    }
    return bool;
}; 

console.log (isValid(s))