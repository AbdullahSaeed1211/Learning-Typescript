function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("provide ID");
        return
    }
    id.toLowerCase()
}
interface user {
    name: string,
    email: string
}

interface admin {
    name: string,
    email: string,
    isAdmin: boolean
}
function isAdminAccount(account: user | admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void }
type Bird = { swim: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    }
    else {
        pet
        return "bird Food"
    }
}