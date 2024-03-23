import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user2",
  //       email:'user2@gmail.com',
  //       role:UserRole.user,
  //     },
  //   });

  //   const createProfile = await prisma.profile.create({
  //     data:{
  //         bio:"this is bio",
  //         userId: 1
  //     }
  //   })

  // const createCategory = await prisma.category.create({
  //     data:{
  //         name:"Tech dev"
  //     }
  // })

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 55",
      content: "this is content the post 55",
      authorId: 3,
      postCategory: {
        create:[
            {
                categoryId:1
            },
            {
                categoryId:3
            },
            {
                categoryId:4
            },
        ]
      },
    },
    include:{
        postCategory: true
    }
  });

  console.log(createPost);

  // const post = await prisma.post.createMany({
  //     data:[
  //         {
  //             title:"title-1",
  //             content:"content-1",
  //             authorName:"author1"
  //         },
  //         {
  //             title:"title-2",
  //             content:"content-2",
  //             authorName:"author2"
  //         },
  //         {
  //             title:"title-3",
  //             content:"content-3",
  //             authorName:"author3"
  //         },
  //         {
  //             title:"title-4",
  //             content:"content-4",
  //             authorName:"author4"
  //         },
  //     ]
  // });

  // console.log(post);
};

main();
