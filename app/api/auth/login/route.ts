// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { stat } from "fs";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({
    status: 200,
    message: "Users retrieved successfully",
    data: users,
  });
}
