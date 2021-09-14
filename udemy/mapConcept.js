
let map = new Map();

map.set(1, 'A');
map.set(6, 'C');
map.set(3, 'S');
map.set(2, 'B');

console.log(map.set(10, 'M').set(8, 'N'));

console.log(map.delete(6));
console.log(map);
console.log(map.size);
map.clear();
console.log(map);