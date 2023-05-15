const users  = [
    {
        name:"soran",
        email : "soranit2000@gmail.com",
        password:"@So12123654"

    } ,
    {
        name:"sina",
        email: "sinait2000@gmail.com",
        password: "@Sina12123654"
    },
    {
        name :"alan",
        email: "alant2000@gmail.com",
        password: "@Alan12123654"
    }
]

export const userCheck = (username,password)=>{
    return users.find(user=>user.email===username && user.password===password)
}

