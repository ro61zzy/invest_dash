"use client";
import useSWR from "swr";
import { FinnhubQuote } from "@invest/types";

interface Holdings {
  symbol: string;
  shares: number;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const mockHoldings: Holdings[] = [
  { symbol: "AAPL", shares: 10 },
  { symbol: "MSFT", shares: 5 },
  { symbol: "GOOGL", shares: 8 },
  { symbol: "AMZN", shares: 3 },
];

export default function usePortfolio() {
  const symbols = mockHoldings.map(h => h.symbol);
  
  const { data: quotes, error: quotesError, isLoading: quotesLoading } = useSWR<FinnhubQuote[]>(
    `/api/multi-quote?symbols=${symbols.join(',')}`,
    fetcher
  );


  const symbol = "MSFT";
  const from = Math.floor(Date.now() / 1000) - 31536000; // last year
  const to = Math.floor(Date.now() / 1000);

  const { data: historicalData, error: historicalError, isLoading: historicalLoading } = useSWR(
    `/api/stock-candles?symbol=${symbol}&resolution=D&from=${from}&to=${to}`,
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
