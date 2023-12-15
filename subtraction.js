"use strict";
// subtraction 
//  function subtraction(){
//     let Sub: number = 5674 - 889
//     let Sub2: number = 784 - 784
//     console.log(Sub, Sub2)
//  }
//  subtraction()
//  export default subtraction
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
//
// get input from the user.
//
function subtraction() {
    var n1 = prompt("Please Enter Your First Number?");
    var number = parseInt(n1);
    var n2 = parseInt(prompt("Please Enter Your Second Number?"));
    var result = number / n2;
    console.log(result);
}
;
subtraction();
exports.default = subtraction;
