// apps/web/components/TickerTape.tsx
"use client";
import useForex from "../hooks/useForex";
import { FinnhubForexQuote } from "@invest/types";
import { TrendingUp, TrendingDown } from "lucide-react";

const forexPairs = ["EURUSD", "GBPJPY", "AUDUSD", "USDCHF"];

export default function TickerTape() {
  const { rates, isLoading, isError } = useForex(forexPairs);

  if (isLoading || isError || !rates) return null;

  return (
    <div className="bg-gray-900 text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="ticker-tape inline-block animate-marquee">
        {rates.map((rate: FinnhubForexQuote) => {
          const price = rate.p ?? 0;
          const change = 0.01; // mock change
          const isPositive = change >= 0;

          return (
            <span key={rate.s} className="mx-8 font-mono">
              <span className="text-gray-400">{rate.s}:</span>{" "}
              <span className={`font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}>
                ${price.toFixed(4)}
              </span>
              <span className="text-sm ml-1">
                {isPositive ? <TrendingUp className="inline w-4 h-4" /> : <TrendingDown className="inline w-4 h-4" />}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
