// class User {
//     email: string;
//     name   : string;
//     private city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }


class User {
    protected _courseCount = 1
    readonly city: string = "jaipur"
    constructor(public email: string, public name: String) {

    }
    private delToken() { console.log("deleted token"); }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {//no return type
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")

        }
        this._courseCount = courseNum
    }

}

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4;
    }
}


const Zoro = new User("Z@z.com", "Zoro");

export { } 