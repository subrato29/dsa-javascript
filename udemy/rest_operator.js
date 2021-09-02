//SPREAD and REST operator are exactly look same but they work in opposite ways depending on where thet are used
//SPREAD, because of RIGHT side of = 
//SPREAD operator unpack the array elements
let arr = [1, 2, ...[3, 4]];
console.log(arr);//[1, 2, 3, 4]

//REST, because of LEFT side of =
//REST operator pack the elements into an array
let [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [3, 4, 5]

//add function using REST operator, which will make normal element as array of element
let add = function(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}
add(2, 3);
add(4, 2, 5, 7);
add(1, 6, 3, 4, 2, 8);

const x = [12, 8, 2];
add(...x); // SPREAD(...x) operator which destructuring array elements as (12, 8, 2);