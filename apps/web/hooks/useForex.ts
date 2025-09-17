"use client";
import useSWR, { SWRResponse } from "swr";
import { FinnhubForexQuote } from "@invest/types"; 

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch forex data");
  }
  return res.json();
};

export default function useForex(pairs: string[]) {
  // Use useSWR with an explicit return type
  const { data, error, isLoading }: SWRResponse<FinnhubForexQuote[], any> = useSWR(
    `/api/forex?pairs=${pairs.join(",")}`,
    fetcher,
    { refreshInterval: 5000 }
  );

  return {
    rates: data,
    isLoading,
    isError: !!error, // !!error converts the error object to a boolean
  };
}