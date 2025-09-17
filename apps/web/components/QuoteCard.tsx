// apps/web/components/cards/QuoteCard.tsx
import { ArrowUp, ArrowDown } from "lucide-react";

interface QuoteCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
}

export default function QuoteCard({
  symbol,
  name,
  price,
  change,
  percentChange,
}: QuoteCardProps) {
  const isPositive = percentChange >= 0;
  const changeColor = isPositive ? "text-green-500" : "text-red-500";
  const arrowIcon = isPositive ? (
    <ArrowUp className="w-5 h-5 text-green-500" />

  ) : (
    <ArrowDown className="w-5 h-5 text-red-500" />
  );

  return (
    <div className="rounded-lg bg-gray-800 p-6 shadow-md transition-all hover:bg-gray-700">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            isPositive ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {symbol}
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold text-white">${price.toFixed(2)}</p>
      <div className="mt-2 flex items-center">
        <span className={`flex items-center text-sm font-medium ${changeColor}`}>
          {arrowIcon}
          {change.toFixed(2)} ({percentChange.toFixed(2)}%)
        </span>
      </div>
    </div>
  );
}