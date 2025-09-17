"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useQuote(symbol: string) {
  const { data, error, isLoading } = useSWR(`/api/quote?symbol=${symbol}`, fetcher, {
    refreshInterval: 10000, // poll every 10s
  });

  return {
    quote: data,
    isLoading,
    isError: error,
  };
}
