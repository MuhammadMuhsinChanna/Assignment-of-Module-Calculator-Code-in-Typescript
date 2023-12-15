// subtraction 
//  function subtraction(){
//     let Sub: number = 5674 - 889
//     let Sub2: number = 784 - 784
//     console.log(Sub, Sub2)
//  }
//  subtraction()
//  export default subtraction

var prompt = require ('prompt-sync')();
//
// get input from the user.
//

function subtraction (): void{
let n1 = prompt("Please Enter Your First Number?");
let number = parseInt(n1);
let n2 = parseInt (prompt("Please Enter Your Second Number?"))
let result = number / n2 
console.log (result);};
subtraction();
export default subtraction; 
