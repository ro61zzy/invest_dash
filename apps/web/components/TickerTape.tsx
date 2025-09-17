// apps/web/components/TickerTape.tsx
"use client";
import useForex from "../hooks/useForex";
import { FinnhubForexQuote } from "@invest/types";
import { TrendingUp, TrendingDown } from "lucide-react";

const forexPairs = ["EURUSD", "GBPJPY", "AUDUSD", "USDCHF", "GBPUSD", "USDCAD",];

export default function TickerTape() {
  const { rates, isLoading, isError } = useForex(forexPairs);

  if (isLoading || isError || !rates) return null;

 return (
  <div className="w-full overflow-hidden bg-gray-900 text-white py-2">
    <div className="ticker-tape flex animate-marquee">
      {rates.map((rate: FinnhubForexQuote) => {
        const price = rate.p ?? 0;
        const change = 0.01;
        const isPositive = change >= 0;
        return (
          <span key={rate.s} className=" font-mono flex-shrink-0">
            <span className="text-gray-400">{rate.s}:</span>{" "}
            <span
              className={`font-bold ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              ${price.toFixed(4)}
            </span>
          </span>
        );
      })}
    </div>
    
  </div>
);

}
