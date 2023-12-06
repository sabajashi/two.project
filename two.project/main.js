
//homework N2
const user={
    name:"james",
    firstname:"bond",
    address:{
        cyty:"tbilisi",
        street:"sulxan cincazis street N11"
        
    
    }

}
        const{address:{cyty}={}}=user
        console.log(cyty);




//homework N3
const user2={
name:"max",
firstname:"bond",

information:{
age:13,
height:175,

    address:{
        city:"batumi",
        street:"saakadzis N11"
    }

}
}

const user3={
        ...user2,
    address:{
        ...user2.address,
    }

}








