import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  const { name, nim, no_wa, email, status, password } = await request.json();

  const hashedPassword = await bcryptjs.hash(password, 10);

  await prisma.user.create({
    data: {
      name: name,
      nim: nim,
      no_wa: no_wa,
      email: email,
      status: status,
      password: hashedPassword,
      role: "USER",
      alumni: {
        create: {},
      },
    },
  });

  return NextResponse.json({
    status: 201,
    message: "User registered successfully",
  });
}
