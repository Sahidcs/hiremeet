// src/app/api/leetcode/route.ts

import { NextResponse } from "next/server";

// Import your question dataset (adjust the path if needed)
import { leetcodeQuestions } from "@/data/leetcodeQuestions";

export async function GET() {
  const random = leetcodeQuestions[Math.floor(Math.random() * leetcodeQuestions.length)];

  return new NextResponse(JSON.stringify(random), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", // 🚫 prevents caching so each request gives a new question
    },
  });
}
