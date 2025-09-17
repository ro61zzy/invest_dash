// apps/web/components/dashboard/MarketNews.tsx
"use client";
import useNews from "../lib/useNews";

export default function MarketNews() {
  const { news, isLoading, isError } = useNews();

  if (isLoading) return <div>Loading news...</div>;
  if (isError) return <div>Error loading news.</div>;
  if (!news || news.length === 0) return <div>No news found.</div>;

  return (
    <ul className="space-y-4">
      {news.slice(0, 5).map((article) => (
        <li key={article.id} className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-cyan-400 transition"
          >
            <p className="text-sm font-semibold text-white">{article.headline}</p>
            <p className="text-xs text-gray-400 mt-1">{article.source}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}