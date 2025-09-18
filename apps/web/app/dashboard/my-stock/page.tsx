"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui";
import { Input } from "@repo/ui";
import { Button } from "@repo/ui";
import { TableCell, TableRow } from "@repo/ui";
import useStockSearch from "../../../hooks/useStockSearch";
import useMultiQuote from "../../../hooks/useMultiQuote";
import { FinnhubQuote } from "@invest/types";
import { XCircle } from "lucide-react";
import MarketNews from "../../../components/MarketNews";

export default function MyStockPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const { results, isLoading: isSearching } = useStockSearch(searchQuery);

  const {
    quotes,
    isLoading: quotesLoading,
    isError: quotesError,
  } = useMultiQuote(watchlist);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

  interface StockResult {
    description: string;
    symbol: string;
  }

  const handleAddStock = (symbol: string) => {
    if (!watchlist.includes(symbol)) {
      const newWatchlist = [...watchlist, symbol];
      setWatchlist(newWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
      setSearchQuery("");
    }
  };

  const handleRemoveStock = (symbol: string) => {
    const newWatchlist = watchlist.filter((s) => s !== symbol);
    setWatchlist(newWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
  };

  const getQuoteForSymbol = (symbol: string): FinnhubQuote | undefined => {
    const index = watchlist.indexOf(symbol);
    return quotes?.[index];
  };

  return (
   <section className="space-y-8">
  <h1 className="text-3xl font-bold text-white">Your Watchlist</h1>
  
  <div className="flex flex-col md:flex-row gap-4 w-full items-start">
    
  
    <div className="flex flex-col md:flex-row gap-4 flex-1 w-full">
      <Card className="flex-1 bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>Add a Stock</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Search for a stock (e.g., AAPL, Microsoft)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {isSearching && <p className="text-gray-400">Searching...</p>}
          {!isSearching && results.length > 0 && (
            <div className="mt-2 space-y-2">
              {results.map((item: StockResult) => (
                <div
                  key={item.symbol}
                  className="flex items-center justify-between p-2 rounded-md bg-gray-700"
                >
                  <span>
                    {item.description} ({item.symbol})
                  </span>
                  <Button
                    onClick={() => handleAddStock(item.symbol)}
                    variant="outline"
                  >
                    Add
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="flex-1 bg-gray-800 text-white">
        <CardHeader>
          <CardTitle>My Stocks</CardTitle>
        </CardHeader>
        <CardContent>
          {quotesLoading && watchlist.length > 0 && (
            <p>Loading watchlist data...</p>
          )}
          {quotesError && watchlist.length > 0 && (
            <p className="text-red-500">Error loading watchlist data.</p>
          )}
          {watchlist.length === 0 && !quotesLoading && (
            <p className="text-gray-400">
              Your watchlist is empty. Add a stock to get started!
            </p>
          )}
          {watchlist.map((symbol) => {
            const quote = getQuoteForSymbol(symbol);

            if (!quote || typeof quote.c !== "number" || typeof quote.dp !== "number") {
              return (
                <TableRow key={symbol} className="border-gray-700">
                  <TableCell className="font-medium">{symbol}</TableCell>
                  <TableCell>{symbol}</TableCell>
                  <TableCell className="text-gray-400">Loading…</TableCell>
                  <TableCell className="text-gray-400">—</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveStock(symbol)}
                    >
                      <XCircle className="w-5 h-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            }

            const isPositive = quote.dp >= 0;
            const changeColor = isPositive ? "text-green-500" : "text-red-500";

            return (
              <TableRow key={symbol} className="border-gray-700">
                <TableCell className="font-medium">{symbol}</TableCell>
                <TableCell>{symbol}</TableCell>
                <TableCell>${quote.c.toFixed(2)}</TableCell>
                <TableCell className={changeColor}>{quote.dp.toFixed(2)}%</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveStock(symbol)}
                  >
                    <XCircle className="w-5 h-5" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </CardContent>
      </Card>
    </div>

    <aside className="w-full md:w-80 rounded-lg bg-gray-800 p-5 shadow-sm h-fit sticky top-6">
      <h2 className="text-lg font-semibold text-cyan-500 mb-3">
        Latest Headlines
      </h2>
      <MarketNews />
    </aside>
  </div>
</section>

  );
}
