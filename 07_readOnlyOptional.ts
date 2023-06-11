type User = {
    readonly _id: string; //readonly can't change
    name: string
    email: string
    isActive: boolean
    credCardNum?: number //? before : for optional
}

let myUser: User = {
    _id: "123",
    name: "z",
    email: "z@xy",
    isActive: true,
}

type cardNum = {
    cardnumber: string;
}
type cardDate = {
    carddate: string;
}
type cardDetails = cardNum & cardDate & { cvv: number };

myUser.email = "z@gmail.com"
// myUser._id="12345" can't be changed
// purely a TS feature