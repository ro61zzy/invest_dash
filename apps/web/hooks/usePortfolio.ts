"use client";
import useSWR from "swr";
import { FinnhubQuote } from "@invest/types";

interface Holdings {
  symbol: string;
  shares: number;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

// Mock user's portfolio data
const mockHoldings: Holdings[] = [
  { symbol: "AAPL", shares: 10 },
  { symbol: "MSFT", shares: 5 },
  { symbol: "GOOGL", shares: 8 },
  { symbol: "AMZN", shares: 3 },
];

export default function usePortfolio() {
  const symbols = mockHoldings.map(h => h.symbol);
  
  
  // Fetch real-time quotes for all holdings
  const { data: quotes, error: quotesError, isLoading: quotesLoading } = useSWR<FinnhubQuote[]>(
    `/api/multi-quote?symbols=${symbols.join(',')}`,
    fetcher
  );

  // You would typically fetch historical data for a single symbol
  // For the sake of this example, we'll just mock it.
  const { data: historicalData, error: historicalError, isLoading: historicalLoading } = useSWR(
    `/api/stock-candles?symbol=${symbols[0]}&resolution=D&from=${Math.floor(Date.now() / 1000) - 31536000}&to=${Math.floor(Date.now() / 1000)}`, // Last year of data
    fetcher
  );

  return {
    holdings: mockHoldings,
    quotes,
    historicalData,
    isLoading: quotesLoading || historicalLoading,
    isError: quotesError || historicalError,
  };
}