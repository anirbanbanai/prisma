import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  // const deleteSData = await prisma.post.delete({
  //   where: {
  //     id: 2
  //   },
  // });

const deleteMany = await prisma.post.deleteMany({
 
})
  console.log(deleteMany);
};

deleteData();
