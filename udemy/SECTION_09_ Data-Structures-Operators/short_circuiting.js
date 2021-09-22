//Use any data type and return any data type
//Short-circuiting(|| operator): Concatened by || operator, if the first value is truthy value, it will immidiately 
//return the first value, and other operatant will not be evaluated. Otherwise it will move on for next truethy value.
console.log(3 || 'Subrato'); //3
console.log('' || 'Subrato'); //'Subrato' because '' is a falsy value
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || 0 || 'Hello' || 23 || null); //'Hello', because undefined, 0 are falsy value and 'hello' is the first truethy value.

//Short-circuiting(&& operator): works exactly opposite to || operator, i.e. first falsy value will be returned.
console.log(0 && 'Subrato'); //0, as 0 is first falsy value;
console.log(3 && 'Subrato'); //Subrato, as the 1st value is truethy, hence it will move on to next one. No falsy value found, hence it return last value;
console.log('' && 'Subrato'); //'' because '' is the falsy value
console.log(true && 0); //0
console.log(undefined && null); //undefined
console.log(undefined && 0 && 'Hello' && 23 && null); //undefined
