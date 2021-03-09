function solution(num) {
    let result = [];
    let c3 = 0, c5 = 0;
    for (let i = 1; i <= num; i++) {
        c3++;
        c5++;
        let data = '';
        if (c3 === 3) {
            data += 'Fizz';
            c3 = 0;
        }
        if (c5 === 5) {
            data += 'Buzz';
            c5 = 0;
        }
        if (data === '') {
            result.push(''+ i);
        } else {
            result.push(data);
        }
    }
    return result;
}

console.log(solution(15));