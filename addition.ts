// additions in calculator 

var prompt = require ('prompt-sync')();
//
// get input from the user.
//

function addition (): void{
let n1 = prompt("Please Enter Your First Number?");
let number = parseInt(n1);
let n2 = parseInt (prompt("Please Enter Your Second Number?"))
let result = number + n2 
console.log (result);};
addition();
export default addition; 
