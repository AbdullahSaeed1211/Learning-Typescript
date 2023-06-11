var score = 33;
score = 44;
console.log(score);
score = "55";
console.log(score);
var zoro;
zoro = { username: "Z", id: 1234 };
function getUserId(id) {
    console.log("id is ".concat(id));
}
getUserId(345);
getUserId("45");
function getAnotherId(id) {
    if (typeof id === "string") {
        id.toLowerCase;
    }
}
getAnotherId("ANOTHA ID");
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, "3", false];
var pi = 3.14;
// pi=3.15 not allowed
var seatAllotment;
