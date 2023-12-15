"use strict";
// multipilaction
// function multipilaction (){
//     let Multi: number = 4848 * 7
//     let Multi2 : number = 783 * 2
//     console.log(Multi, Multi2)
// }
// multipilaction()
// export default multipilaction
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
//
// get input from the user.
//
function multipilaction() {
    var n1 = prompt("Please Enter Your First Number?");
    var number = parseInt(n1);
    var n2 = parseInt(prompt("Please Enter Your Second Number?"));
    var result = number * n2;
    console.log(result);
}
;
multipilaction();
exports.default = multipilaction;
