const user={
    name:"Sanji",
    email:"chef@chef.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}

createUser({name:"Sanji",isPaid:false});
 
//returns obj
function createCourse():{name:string, price:number}{
    return {name:"zoro", price: 400}
}

export{}