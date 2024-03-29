import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async()=>{
//   const posts = await prisma.$queryRaw `SELECT * FROM "posts" WHERE true`;
//   console.log(posts);

// delete users table
await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`
}
rawQuery()