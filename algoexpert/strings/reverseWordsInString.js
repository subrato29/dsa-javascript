function reverseWordsInString(string) {
    let stack = [];
    let i = 0;
    let result = '';
    let start = 0;
    while (i < string.length) {
        if (string.charAt(i) === ' ') {
            stack.push(string.substring(start, i));
            start = i + 1;
        }
        i++;
    }
    stack.push(string.substring(start, i));
    while(stack.length > 0) {
        result += stack[stack.length - 1];
        if (stack.length != 1) {
            result += ' ';
        }
        stack.pop();
    }
    return result;
}

let string = "AlgoExpert is the best!";
console.log(reverseWordsInString(string));