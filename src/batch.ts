import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async()=>{
  const createUser = prisma.user.create({
    data:{
        username:"Banai",
        email:"ani@gmail.cm"
    }
  });

  const updateUser = prisma.user.update({
    where:{
        id:5
    },
    data:{
        age:20
    }
  });

  const [userData,updateData] = await prisma.$transaction([
    createUser,updateUser
  ])

//   console.log("create user", createUser);
//   console.log("user user", updateUser);
  console.log(userData,updateData);

}

batchTransaction()