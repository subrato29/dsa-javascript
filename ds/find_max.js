let arr = [45,34,67,34,38,7]
let max = 0;

let findMax = (num) => {
    for (var i = 0; i < num.length; i++) {
        if (max < num[i]) {
            max = num[i]
        }
    }
    return max;
}

console.log (findMax(arr))