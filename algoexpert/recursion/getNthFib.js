//time: O(N)
//space: O(1)
function getNthFib(num) {
    let lastTwo = [0, 1];
    let counter = 3;
    while(counter <= num) {
        let next = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = next;
        counter++;
    }
    return num > 1 ? lastTwo[1] : lastTwo[0];
}