// apps/web/app/dashboard/page.tsx
"use client";
import { Suspense } from "react";
import QuoteCard from "../../components/QuoteCard";
import PortfolioSummary from "../../components/PortfolioSummary";
import MarketMovers from "../../components/MarketMovers";
import MarketNews from "../../components/MarketNews";
import useQuote from "../../lib/useQuote";
import useMultiQuote from "../../lib/useMultiQuote";

const featuredSymbols = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "TSLA",
  "NVDA", "META", "NFLX", "JPM", "V"
];


export default function DashboardPage() {
const { quotes, isLoading, isError } = useMultiQuote(featuredSymbols);

const combinedQuotes = quotes?.map((quote, index) => ({
    symbol: featuredSymbols[index],
    quote: quote,
  }));


  return (
    <section className="space-y-8">
      <div className="border-b border-gray-700 pb-4">
        <h1 className="text-4xl font-bold text-gray-100">Welcome Back</h1>
        <p className="mt-2 text-lg text-gray-400">
          Your unified dashboard for personalized investment insights.
        </p>
      </div>
      <h2 className="text-2xl font-bold text-gray-100">Market Overview</h2>
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {isLoading && <p>Loading market data...</p>}
      {isError && <p>Error loading market data.</p>}
              {combinedQuotes && combinedQuotes.map((item) => (
          <QuoteCard
            key={item.symbol}
            symbol={item.symbol}
            name={item.symbol} // You'd still need a lookup for the real name
            price={item.quote.c}
            change={item.quote.d}
            percentChange={item.quote.dp}
          />

      ))}
    </div>

      {/* 3. Portfolio & Market Movers - Two Columns */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column: Portfolio Summary */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Your Portfolio
          </h2>
          <PortfolioSummary />
        </div>

        {/* Right Column: Top Market Movers */}
        <div className="rounded-lg bg-gray-800 p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            Today's Market Movers
          </h2>
          <MarketMovers />
        </div>
      </div>

      {/* 4. Real-time News Feed */}
      <div className="rounded-lg bg-gray-800 p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Latest Headlines</h2>
        <MarketNews />
      </div>
    </section>
  );
}