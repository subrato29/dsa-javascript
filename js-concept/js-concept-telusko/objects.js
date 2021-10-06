/**
 * objects
 */
let obj = {}; // object without any property
console.log(typeof obj); //object

let obj1 = {
    name : 'Subrato',
    tech : 'JS',
    'work exp' : 4
}
console.log(obj1);
console.log(obj1.name);
console.log(obj1['name']);
console.log(obj1['work exp']); // We can't use '.' operator here, we have to use [];

/**
 * complex object property and delete property
 */
 let obj2 = {
    name : 'Subrato',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Asus'
    }
}
console.log(obj2);
console.log(obj2.laptop);
console.log(obj2.laptop.brand);
console.log(obj2.laptop.brand?.length);
console.log(obj2.laptop.brand1?.length); // undefined, because brand1 is not available

delete(obj2.laptop);
console.log(obj2);