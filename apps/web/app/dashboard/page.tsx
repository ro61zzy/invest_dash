"use client";
import QuoteCard from "../../components/QuoteCard";
import PortfolioSummary from "../../components/PortfolioSummary";
import MarketMovers from "../../components/MarketMovers";
import MarketNews from "../../components/MarketNews";
import useMultiQuote from "../../hooks/useMultiQuote";

const featuredSymbols = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "TSLA",
  "NVDA",
  "META",
  "NFLX",
  "JPM",
  "V",
];

export default function DashboardPage() {
  const { quotes, isLoading, isError } = useMultiQuote(featuredSymbols);

  if (isLoading) {
    return (
      <p className="text-center text-white mt-20">Loading market data...</p>
    );
  }
  if (isError || !quotes) {
    return (
      <p className="text-center text-red-500 mt-20">Failed to load data.</p>
    );
  }

  const combinedQuotes = quotes.map((quote, i) => ({
    symbol: featuredSymbols[i] ?? "N/A",
    quote,
  }));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 pt-4">
      {/* Main content */}
      <div className="space-y-6 ">
        <h2 className="text-xl font-semibold text-gray-100">Market Overview</h2>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
          {combinedQuotes.map((item) => (
            <QuoteCard
              key={item.symbol}
              symbol={item.symbol}
              name={item.symbol}
              price={item.quote.c}
              change={item.quote.d}
              percentChange={item.quote.dp}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <section className="w-full max-w-full overflow-hidden rounded-lg bg-gray-800 p-4 sm:p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-100 mb-3">
              Your Portfolio
            </h2>
            <PortfolioSummary />
          </section>

          <section className="w-full max-w-full overflow-hidden rounded-lg bg-gray-800 p-4 sm:p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-100 mb-3">
              Market Movers
            </h2>
            <MarketMovers />
          </section>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="rounded-lg bg-gray-800 p-5 shadow-sm h-fit sticky top-6">
        <h2 className="text-lg font-semibold text-gray-100 mb-3">
          Latest Headlines
        </h2>
        <MarketNews />
      </aside>
    </div>
  );
}
