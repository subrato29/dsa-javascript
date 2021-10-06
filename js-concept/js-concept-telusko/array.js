//type of Array initialization
let array = [];
let array1 = new Array();

//inserting element in array
let num = [1, 2];
//way 1
num.push(3) // [1, 2, 3]
//way 2
num[2] = 3
console.log(num);


// Array can contain different types of element
let data = ['computer', 4, {tech : 'JS'}, function(){
    console.log('hello world')
}]

console.log(data);
console.log(data[3]());

//Array methods
let value = [1, 2, 3, 4]
console.log('push: ' + value.push(5)); //always added at last position
console.log(value); //[1, 2, 3, 4, 5]

value = [1, 2, 3, 4]
console.log('pop: ' + value.pop()); // o/p: 5 [always remove last element.. LIFO]
console.log(value); //[1, 2, 3, 4]

value = [1, 2, 3, 4]
console.log('shift: ' + value.shift()); // o/p: 1 [remove element from 1st position]
console.log(value);

value = [1, 2, 3, 4]
console.log('unshift: ' + value.unshift(10)); // add element at 1st position of an array
console.log(value);

value = [1, 2, 3, 4, 5, 6, 7, 8]
//splice(index, count of elements to remove)
console.log('splice: ' + value.splice(2)); //[o/p: [3, 4, 5, 6, 7, 8] -- removing elements from index 2

value = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('splice: ' + value.splice(2, 1)); //[o/p: [3] -- removing 1 element(i.e. 3) at index 2
console.log(value);