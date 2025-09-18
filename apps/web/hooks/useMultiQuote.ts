
"use client";
import useSWR from "swr";
import { FinnhubQuote } from "@invest/types";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default function useMultiQuote(symbols: string[]) {
  const { data, error, isLoading } = useSWR<FinnhubQuote[]>(
    `/api/multi-quote?symbols=${symbols.join(",")}`,
    fetcher,
    {
      refreshInterval: 10000,
    }
  );

  return {
    quotes: data,
    isLoading,
    isError: error,
  };
}