import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(
  req: NextRequest,
  { params }: { params: { contestId: string; index: string } }
) {
  const { contestId, index } = params;

  try {
    const url = `https://codeforces.com/problemset/problem/${contestId}/${index}`;
    const res = await fetch(url);
    const html = await res.text();

    const $ = cheerio.load(html);
    const description = $(".problem-statement").html();

    if (!description) {
      return NextResponse.json({ error: "Description not found" }, { status: 404 });
    }

    return NextResponse.json({ description });
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch problem" }, { status: 500 });
  }
}
