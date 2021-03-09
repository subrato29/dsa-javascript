function productExceptSelf(array) {
    let result = new Array(array.length);
    let multiplication = 1;
    for (let i = 0; i < array.length; i++) {
        result[i] = multiplication;
        multiplication = multiplication * array[i];
    }
    multiplication = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        result[i] = result[i] * multiplication;
        multiplication = multiplication * array[i];
    }
    return result;
}