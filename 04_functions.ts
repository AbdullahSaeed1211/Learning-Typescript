// function addTwo(num){
//     // num.toUpperCase() is allowed due to any
//     return num+2
// }
// addTwo(7) will accept any 

function addTwo(num: number): number {
    return num + 2
}
function getUpper(val: string) {
    return val.toUpperCase()
}
function signUp(username: string, email: string, password: string, isPaid: boolean) {

}
let userLogin = (name: string, email: string, isPaid: boolean = false) => { }

let myVal = addTwo(3);

getUpper("Brook");
signUp("Luffy", "Luffy@kingofPirates", "one piece", true);
userLogin("Zoro", "Zoro@kingOfHell");

// function getValue(myVal:number){ // can't fix multiple return types yet
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s: String): string => {
    return ""
}
const heros = ["thor", "spiderman", "ironman"]
// const heros [1,2,3] // typescript smort will change the map return to numbers now (context switching)
heros.map(hero => {
    return `hero is ${heros}`
})

function consoleErr(errmsg:string): void{ //returns void no return
    console.log(errmsg);
}
function fail(msg: string): never { //The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
    throw new Error(msg);
  }



export {

}