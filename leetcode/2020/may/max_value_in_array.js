//Return max value in array

let arr = [20, 30, 10, 40, 23, 20];

let maxArrElement = (arr) => {
    let len = arr.length;
    let max = 0;
    while (len --) {
        if(arr[len] > max) {
            max = arr[len]
        }
    }
    return max;
}

console.log(maxArrElement(arr));