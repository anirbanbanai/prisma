import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interectiveTransaction = async()=>{
   const result = await  prisma.$transaction(async(txC)=>{
    //query 1
    const getAllPost = await txC.post.findMany({
        where:{
            published:true
        }
    });

    // query 2
    const countUser = await txC.user.count();

    // query 3
    const updateUser = await txC.user.update({
        where:{
            id: 3
        },
        data:{
            age: 444
        }
    })
    return {
        getAllPost,
        countUser,
        updateUser
    }

   });
   console.log(result);
}

interectiveTransaction()