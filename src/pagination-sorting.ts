import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSroting = async () => {
  // offset base pagination
  // const offSetData = await prisma.post.findMany({
  //     skip:5,
  //     take:4
  // })

  // cursor base pagination
  // const offSetData = await prisma.post.findMany({
  //     skip:1,
  //     take:2  ,
  //     cursor:{
  //         id:18
  //     }
  // })

  // console.log("offset pagination data", offSetData);

  // assc and desc order
  // const sortingData = await prisma.post.findMany({
  //     orderBy: {
  //         title:"desc"
  //     },
  //     where:{
  //         title:'title-1'
  //     }
  // });

  // fluent api
  // const result  = await prisma.user.findUnique({
  //     where:{
  //         id:1
  //     },

  // }).profile()

  // relational flter
  const publishedPostUsers = await prisma.user
    .findMany({
      include: {
        post: {
          where: {
            published: true
          },
        },
      },
    })
    

  console.log( publishedPostUsers ,{depth: Infinity});
};

paginationSroting();
