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

const gettAllFromDb = await prisma.post.findMany();
console.log(gettAllFromDb);
}
 
main()