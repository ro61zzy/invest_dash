// apps/web/lib/useNews.ts

import useSWR from "swr";
// Import the new interface from your shared types package
import { FinnhubNewsArticle } from "@invest/types"; 

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useNews(category: string = "general") {
  // Specify the type of data the hook will return as an array of FinnhubNewsArticle
  const { data, error, isLoading } = useSWR<FinnhubNewsArticle[]>(
    `/api/news?category=${category}`,
    fetcher,
  );

  return {
    news: data,
    isLoading,
    isError: error,
  };
}