/**
 * Functions are hoisted first, then variable declarations, per ECMAScript 5, section 10.5 
 * which specifies how hoisting happens:
 * So, functions are given higher priority than var statements, since the later var statements 
 * cannot overwrite a previously-handled function declaration
 */
 function f (){}
 var f;
 console.log(f); // f (){} 
 
 var g;
 function g() {}
 console.log(g); // g (){};