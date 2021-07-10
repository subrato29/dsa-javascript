let obj2 = {
    name : 'Subrato',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Asus'
    }
}

for (let key in obj2) {
    console.log(key);
}

for (let key in obj2) {
    console.log(key, obj2[key]);
}

for (let key in obj2.laptop) {
    console.log(key, obj2.laptop[key]);
}