import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async()=>{
    
//    const singleUpdate = await prisma.post.update({
//     where:{
//         id:4
//     },
//     data:{
//         title:"my title 4",
//         authorName:"author 4 beggi"
//     }
//    });

   // const updateMany = await prisma.post.updateMany({
   //  where:{
   //     title:"my title 4"
   //  },
   //  data:{
   //     published: true
   //  }
   // })

   // upsert
   const upsertdata  = await prisma.post.upsert({
      where:{
         id:6
      },
      update:{
       authorName:"anirban"
      },
      create:{
         title:"title 1",
         content:"content 1"
      }
   })

   console.log(upsertdata);
}

updates()