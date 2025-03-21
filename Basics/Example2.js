//REDECLARATION
var x = 10;
var x = 20; // ALLOWS REDECLARATION
let y = 30; // DOES NOT ALLOW REDECLARATION
const z = 50;  // DOES NOT ALLOW REDECLARATION
console.log(x, y, z);

//REASSIGNMENT
let a = 5;
a = 10; // REASSIGNMENT POSSIBLE IN LET
const b = 15;// REASSIGNMENT NOT POSSIBLE IN CONST
console.log(a, b);

//HOISTING
console.log(a); //(var is hoisted )
var d = 5;

let e = 10; // CANNOT PRINT BEFORE INITIALIZATION
const c = 15;


