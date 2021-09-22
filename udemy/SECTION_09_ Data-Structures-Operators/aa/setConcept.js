
const set = new Set(['A', 'B', 'B', 'F', 'G', 'D', 'C']);
console.log(set);

console.log(new Set('subrato'));
console.log(set.size);
console.log(set.has('B'));

set.add('X');
console.log(set);

set.delete('A');
set.clear();

for (const ele of set) {
    console.log(ele);
}

const arr = ['A', 'B', 'B', 'F', 'G', 'D', 'C'];
uniqueSet = new Set(arr);
console.log (uniqueSet); //new Set

uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // array with unique element