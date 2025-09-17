import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbolsString = searchParams.get("symbols");
  const symbols = symbolsString ? symbolsString.split(",") : [];
  const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

  if (!FINNHUB_API_KEY) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const quotes = await Promise.all(
    symbols.map(async (symbol) => {
      const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`;
      const response = await fetch(url);
      return response.json();
    })
  );

  return NextResponse.json(quotes);
}