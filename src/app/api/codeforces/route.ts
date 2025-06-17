// src/app/api/codeforces/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    const apiRes = await axios.get(
      "https://codeforces.com/api/problemset.problems?tags=implementation",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    const problems = apiRes.data.result.problems;
    const random = problems[Math.floor(Math.random() * problems.length)];

    const url = `https://codeforces.com/problemset/problem/${random.contestId}/${random.index}`;

    // fetch actual problem HTML
    const htmlRes = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(htmlRes.data);
    const title = $(`.problem-statement .title`).text().trim();
    const statementHtml = $(".problem-statement").html() || "";

    return NextResponse.json({
      title: `${random.index}. ${random.name}`,
      description: statementHtml,
      url,
      constraints: [],
      examples: [],
    });
  } catch (error: any) {
    console.error("Codeforces fetch error:", error.message);
    return NextResponse.json({ error: "Failed to fetch Codeforces problem" }, { status: 500 });
  }
}
