import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main =async ()=>{
// const result = await prisma.post.create({
//     data: {
//         title:"this is title...2",
//         content:"this is content...31",
//         authorName:"Amir..3j"
//     }
// });

// console.log(result);

const post = await prisma.post.createMany({
    data:[
        {
            title:"title-1",
            content:"content-1",
            authorName:"author1"
        },
        {
            title:"title-2",
            content:"content-2",
            authorName:"author2"
        },
        {
            title:"title-3",
            content:"content-3",
            authorName:"author3"
        },
        {
            title:"title-4",
            content:"content-4",
            authorName:"author4"
        },
    ]
});

console.log(post);

}
 
main()