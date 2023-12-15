"use strict";
// // division 
Object.defineProperty(exports, "__esModule", { value: true });
// function division (){
//     let division: number = 783 / 10
//     let Division: number = 1100 / 1043
//     console.log(division, Division)
// }
// division()
// export default division 
var prompt = require('prompt-sync')();
//
// get input from the user.
//
function division() {
    var n1 = prompt("Please Enter Your First Number?");
    var number = parseInt(n1);
    var n2 = parseInt(prompt("Please Enter Your Second Number?"));
    var result = number / n2;
    console.log(result);
}
;
division();
exports.default = division;
