let person = {
    age : 12,
    name : 'Subrato',
    dob : 1984
}
//destructuring of object, but we need to mention same property name
const{age, name, dob} = person;
console.log(age, name, dob); //12 "Subrato" 1984

person = {
    age1 : 14,
    name1 : 'Mouli',
    dob1 : 1988
}
const{age1, name1, dob1} = person;
console.log(age1, name1, dob1);

//Mutating variables
let a = 100;
let b = 200;
const obj = {a : 101, b : 201, c : 500};
({a, b} = obj);
console.log(a, b); //101, 201