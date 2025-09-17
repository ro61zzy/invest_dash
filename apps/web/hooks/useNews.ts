

import useSWR from "swr";
import { FinnhubNewsArticle } from "@invest/types"; 

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useNews(category: string = "general") {
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