import { NextResponse } from "next/server";

// Reads your Finnhub API key from environment variables
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY as string;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 }
    );
  }

  if (!FINNHUB_API_KEY) {
    return NextResponse.json(
      { error: "Missing FINNHUB_API_KEY environment variable" },
      { status: 500 }
    );
  }

  try {
    // Call Finnhub search endpoint
    const response = await fetch(
      `https://finnhub.io/api/v1/search?q=${encodeURIComponent(
        query
      )}&token=${FINNHUB_API_KEY}`
    );

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json(
        { error: "Finnhub request failed", details: errText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Unexpected error", details: error.message },
      { status: 500 }
    );
  }
}
