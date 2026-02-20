import { PrismaClient } from "./generated/prisma";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

const globalForPrisma = globalThis as unknown as {
  prisma: typeof prisma | undefined;
};

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
