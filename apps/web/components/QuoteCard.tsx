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
  const safePrice = typeof price === "number" ? price : 0;
  const safeChange = typeof change === "number" ? change : 0;
  const safePercent = typeof percentChange === "number" ? percentChange : 0;

  const isPositive = safePercent >= 0;
  const changeColor = isPositive ? "text-green-500" : "text-red-500";
  const arrowIcon = isPositive ? (
    <ArrowUp className="w-5 h-5 text-green-500" />
  ) : (
    <ArrowDown className="w-5 h-5 text-red-500" />
  );

  return (
    <div className="rounded-lg bg-gray-800 p-4 shadow-md transition-all hover:bg-gray-700">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] md:text-l xl:text-[15px] font-semibold text-white">{name}</h3>
        <span
          className={`rounded-full px-2 py-1 text-[8px] font-bold ${
            isPositive ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {symbol}
        </span>
      </div>
      <p className="mt-1 text-m md:text-[18px] xl:text-[20px] font-bold text-white">
        ${safePrice.toFixed(2)}
      </p>
      <div className="mt-1 flex items-center">
        <span className={`flex items-center text-[8px] font-medium ${changeColor}`}>
          {arrowIcon}
          {safeChange.toFixed(2)} ({safePercent.toFixed(2)}%)
        </span>
      </div>
    </div>
  );
}
