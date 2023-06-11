let score: number | string = 33

score = 44
console.log(score);
score = "55"
console.log(score);


type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}
let zoro: User | Admin
zoro = { username: "Z", id: 1234 }

function getUserId(id: number | string) {
    console.log(`id is ${id}`);
}
getUserId(345)
getUserId("45")

function getAnotherId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase
    }

}
getAnotherId("ANOTHA ID")



// array
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string | boolean)[] = ["1", 2, "3", false]

let pi: 3.14 = 3.14
// pi=3.15 not allowed

let seatAllotment: "aisle"|"middle"|"window"



