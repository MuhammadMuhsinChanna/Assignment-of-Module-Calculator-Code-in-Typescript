// multipilaction

var prompt = require ('prompt-sync')();
//
// get input from the user.
//

function multipilaction (): void{
let n1 = prompt("Please Enter Your First Number?");
let number = parseInt(n1);
let n2 = parseInt (prompt("Please Enter Your Second Number?"))
let result = number * n2 
console.log (result);};
multipilaction();
export default multipilaction; 
