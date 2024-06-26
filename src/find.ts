import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async()=>{
    // get All data
    // const getAllFromDb = await prisma.post.findMany();

    // find first and find first or throw
    // const firstFind = await prisma.post.findFirstOrThrow({
    //     where:{
    //         id:1
    //     }
    // });

    // find unique and find unique or throw error
    const findUnique = await prisma.post.findUniqueOrThrow({
        where:{
            id:4
        },
        select:{
            title:true,
            published: true
        }
    })

    console.log(findUnique);
}
main()