"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useStockSearch(query: string) {
  const { data, error, isLoading } = useSWR(
    query ? `/api/search?query=${query}` : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    results: data?.result || [],
    isLoading,
    isError: error,
  };
}