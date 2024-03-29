import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const aggreagate = async () => {
    // find avg age
    const avgAge = await prisma.user.aggregate({
        _avg:{
            age: true
        }
    });

    // find sum of age
    const sumAge = await prisma.user.aggregate({
        _sum:{
            age: true
        }
    });

    // find count
    const countAge = await prisma.user.aggregate({
        _count:{
            age: true
        }
    });

    // find number of record
    const countData = await prisma.user.count()

    // find max & min age
    const maxAge = await prisma.user.aggregate({
        _max:{
            age: true
        }
        // _min:{
        //     age: true
        // }
    });

    console.log(maxAge);
};

aggreagate();
