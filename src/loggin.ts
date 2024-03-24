import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[
        {
            emit:"event",
            level:'query'
        }
    ]
});

prisma.$on("query",(e)=>{
    console.log("query :", e.query);
    console.log("duration :", e.duration);
    console.log("Date & time :", e.timestamp);
})

const main  = async()=>{
    const getAllFound = await prisma.post.findMany();
    // console.log(getAllFound);
}

main()