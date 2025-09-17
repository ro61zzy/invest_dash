// apps/web/app/api/forex/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pairsString = searchParams.get("pairs");
  const pairs = pairsString ? pairsString.split(",") : [];
  const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

  const rates = await Promise.all(
    pairs.map(async (pair) => {
      const url = `https://finnhub.io/api/v1/quote?symbol=${pair}&token=${FINNHUB_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return {
        s: pair,
        p: data.c, // current price
      };
    })
  );

  return NextResponse.json(rates);
}
