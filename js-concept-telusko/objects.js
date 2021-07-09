let obj = {}; // object without any property
console.log(typeof obj); //object

let obj1 = {
    name: 'Subrato',
    tech: 'JS',
    'work exp': 4
}
console.log(obj1);
console.log(obj1.name);
console.log(obj1['name']);
console.log(obj1['work exp']); // We can't use '.' operator here, we have to use [];