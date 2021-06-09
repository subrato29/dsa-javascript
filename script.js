



////////////////////////////////////////////////////////////////////////////////////////////////////////

// doSomething ()
//     .then(result => {
//         console.log ('pass');
//     }).catch(err => {
//         console.log ('fail')
//     });


// doSomething();

// const doSomething = new Promise ((resolve, reject) => {

// })

/*
let getData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve('some data');
        },  2000);
    });
}

let doSomething = async () => {
    let data = await getData();
    console.log (data);
}


let sorting = (a, b) => {
    return a - b;
}

let myArr = [33, 12, 3];
console.log (myArr.sort (sorting));
*/



// let solution = (string) => {
// 	if (!string.includes('X')) {
// 		return -1;
// 	}
// 	let firstIndex = string.indexOf('X');
// 	let lastIndex = string.lastIndexOf('X');

// 	return firstIndex === lastIndex ? -1 : lastIndex - firstIndex;
// }

// console.log (solution ('Xero'));


// let solution = (string, size = string.length) => {
// 	let arr = [];

// 	for (let i = 0; i < string.length; i++) {
// 		arr.push (string.slice(i, i + size));
// 		i = i + size;
// 	}
// 	return arr;
// }

// console.log (solution('JavaScript', 3));

// let id = Symbol('dd');
// console.log (id);

// const arr1 = [4, 2, 3];
// const arr2 = [4, 5, 6];

//arr1.unshift(...arr2);

//console.log (arr1.unshift());

// console.log (arr1.splice(1, 2));

// console.log (Array.isArray(arr1));

 // console.log (arr1.unshift());
 // console.log (arr1.pop());

// let arr3 = [5, 3, 7, 8, 6];
// arr3.sort((a, b) => {
// 	return a - b;
// });

// console.log (arr3);

// function randomize (start, end) {
// 	let arr = [];
// 	for (let i = start; i < end; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// let arr = randomize(3, 10);
// arr.sort(() => 0.5 - Math.random());

// console.log (arr);

// let occurance = (arr) => {
// 	let min = Math.min(...arr);
// 	temp = arr.filter((value) => value === min);
// 	return temp.length;
// }

// let arr = [5, 4, 10, 3, 6, 4, 3, 89, 3, 98];

// //console.log (getMax(arr));
// //console.log(occurance(arr));

// const set = new Set();
// set.add(1);
// set.add(1);
// set.add(3);
// set.add(2);

// //console.log (set);

// const map = new Map();
// map.set(1, 'A');
// map.set(4, 'B');
// map.set(2, 'C');
// map.set(3, 'D');

// console.log(map);

// for (let key of map.keys()) {
// 	console.log (key, map.get(key));
// }

// let arr = [5, 4, 10, 3, 6, 4, 3, 89, 3, 98];
// const isPassed = arr.every(value => value > 1);
// console.log(isPassed);


// let arr1 = [3, 4, 3, 3, 1];
// let arr2 = [6, 4, 5, 5, 10];

// const set1 = new Set(arr1);
// const set2 = new Set(arr2);

// let result = [...set1, ...set2];

// console.log(result);

// for (let key in obj) {
// 	if (obj.hasOwnProperty(key)) {
// 		console.log (key)
// 	}
// }

// Object.values(obj)


// for (let key in obj) {
// 	if(obj.hasOwnProperty(key)) {
// 		console.log(obj[key]);
// 	}
// }

// const newObj = {};
// Object.setPropertyOf(newObj, obj);

// const obj = Object.create(null);
// console.log(obj)

// const obj1 = {a : 1};
// const obj2 = {b : 2};
// obj2._proto_ = obj1;

// console.log(obj2);

// setTimeout((text) => {
// 	console.log('print after a hault');
// }, 1000, 'hello world');

// function display() {
// 	console.log ('print display function..');
// }

// function callback(func) {
// 	if(typeof func === 'function') {
// 		setTimeout(() => {
// 			func();
// 			console.log ('delay..');
// 		}, 1000);
// 	};
// };

// callback (display);

// for (let i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 500);
// }

//func();

// function func () {
// 	let a = 10;
// 	function inner () {
// 		console.log(a + 'inner');
// 	}
// 	return inner;
// }

// let x = func();
// console.log(x);

// let a1 = 1;
// let b1 = 2;
// let arr = {a : a1,
//           b : b1 };
//console.log(arr);
// target = 5
// 4, 5, 6, 7, 0, 1, 2