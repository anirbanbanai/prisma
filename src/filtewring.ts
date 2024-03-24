import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const addFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
          published: false,
        },
      ],
    },
  });
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: false,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "e", //endsWith,container,equal
      },
    },
  });

  const userNameArray = ["user1", "user2", "user3"];

  const UseNameByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDeptData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include:{
        post: {
            include:{
                postCategory: {
                    include:{
                        category: true
                    }
                }
            }
        }
    }
  });

  console.dir(inDeptData, {depth:Infinity});
};

filtering();
