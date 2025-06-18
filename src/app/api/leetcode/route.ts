// src/app/api/leetcode/route.ts

import { NextResponse } from "next/server";
import { leetcodeQuestions } from "@/data/leetcodeQuestions";

export const dynamic = "force-dynamic"; // 👈 important for Vercel

export async function GET() {
  const random = leetcodeQuestions[Math.floor(Math.random() * leetcodeQuestions.length)];

  return new NextResponse(JSON.stringify(random), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
