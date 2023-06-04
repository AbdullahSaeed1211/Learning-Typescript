"use strict";
// function addTwo(num){
//     // num.toUpperCase() is allowed due to any
//     return num+2
// }
// addTwo(7) will accept any 
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(username, email, password, isPaid) {
}
var userLogin = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myVal = addTwo(3);
getUpper("Brook");
signUp("Luffy", "Luffy@kingofPirates", "one piece", true);
userLogin("Zoro", "Zoro@kingOfHell");
// function getValue(myVal:number){ // can't fix multiple return types yet
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros [1,2,3] // typescript smort will change the map return to numbers now (context switching)
heros.map(function (hero) {
    return "hero is ".concat(heros);
});
function consoleErr(errmsg) {
    console.log(errmsg);
}
function fail(msg) {
    throw new Error(msg);
}
