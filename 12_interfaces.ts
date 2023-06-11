interface user {
    readonly dbId: number
    email: String,
    userId: number
    googleId?: string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

interface user{ //reopening of interface
    githubToken?:string
}

interface Admin extends user{
    role:"admin"|"ta"|"learner"
}

const Zoro: Admin = {
    dbId: 22,
    githubToken:"git gud",
    role:"admin",
    email: "Z@gmail.com",
    userId: 2211,
    startTrial: () => {
        return "trial Started"
    },
    getCoupon: (name: "Zoro12", off: 12) => {
        return 12
    }
}
Zoro.email = "Z@z.com"
