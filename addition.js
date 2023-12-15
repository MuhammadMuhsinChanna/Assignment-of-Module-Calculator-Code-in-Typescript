"use strict";
// additions in calculator 
// function additions(){
//     let add: number = 123
//     let Badd: number = 456
//     console.log(add + Badd)
// }
// additions()
// export default additions
//let n2 = parseInt( prompt("what you know  about user? "));
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
//
// get input from the user.
//
function addition() {
    var n1 = prompt("Please Enter Your First Number?");
    var number = parseInt(n1);
    var n2 = parseInt(prompt("Please Enter Your Second Number?"));
    var result = number + n2;
    console.log(result);
}
;
addition();
exports.default = addition;
