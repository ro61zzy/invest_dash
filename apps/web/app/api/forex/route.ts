import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY!;
  const { searchParams } = new URL(request.url);
  const pairs = searchParams.get("pairs")?.split(",") ?? ["AAPL"];

  try {
    const results = await Promise.all(
      pairs.map(async (pair) => {
        const res = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${pair}&token=${FINNHUB_API_KEY}`
        );
        const data = await res.json();
        return { s: pair, p: data.c ?? 0 };
      })
    );

    return NextResponse.json(results);
  } catch (e: any) {
    console.error("Error fetching rates:", e);
    return NextResponse.json({ error: "Failed to fetch rates" }, { status: 502 });
  }
}
