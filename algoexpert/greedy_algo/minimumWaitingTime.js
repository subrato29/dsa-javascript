//Time complexity: O(nlongn)
//Space complexity: O(1)
function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let totalWaitingTime = 0;
    for (let i = 0; i < queries.length; i++) {
        let duration = queries[i];
        let queriesLeft = (queries.length - (i + 1));
        totalWaitingTime += duration * queriesLeft;
    }
    return totalWaitingTime;
}