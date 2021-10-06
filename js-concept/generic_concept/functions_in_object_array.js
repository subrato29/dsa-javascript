
const obj = {
    getRandomInt1: function () {
        return Math.floor(Math.random() * (1000 - 1) + 1);
    },

    getRandomInt2: function () {
        return Math.floor(Math.random() * (2000 - 1001) + 1);
    }
}

console.log(obj.getRandomInt1());
console.log(obj.getRandomInt2());