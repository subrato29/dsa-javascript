let string = 'Subrato';
console.log (string.slice(1)); //ubrato

//replaceAll
string = 'doorhelloifdoorggdoor';
console.log (string.replace (/door/g, 'DOOR')); //DOORhelloifDOORggDOOR

console.log (string.includes ('if')); // true
console.log (string.startsWith ('if')); // false
console.log (string.endsWith ('or')); //true