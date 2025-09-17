// apps/web/app/api/news/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "general";
  const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

  // Choose an endpoint: category-based or top news
  const url = `https://finnhub.io/api/v1/news?category=${category}&token=${FINNHUB_API_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Finnhub API error: ${res.statusText}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Failed to fetch Finnhub news:", err.message);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
