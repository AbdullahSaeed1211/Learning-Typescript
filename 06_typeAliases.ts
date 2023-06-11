type User={
    name:string;
    email:string;
    isActive:boolean;
}
function createUser(user:User):User{
    return{name:"",email:"" , isActive:true}
}

createUser({name:"",email:"" , isActive:true});
// Note that aliases are only aliases - you cannot use type aliases to create different/distinct “versions” of the same type. When you use the alias, it’s exactly as if you had written the aliased type. In other words, this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type: