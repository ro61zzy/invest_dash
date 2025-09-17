// apps/web/components/dashboard/MarketMovers.tsx
const mockMovers = [
  { name: "Tesla Inc.", symbol: "TSLA", change: "+5.1%", isGainer: true },
  { name: "Nvidia Corp.", symbol: "NVDA", change: "+4.3%", isGainer: true },
  { name: "Netflix Inc.", symbol: "NFLX", change: "-2.8%", isGainer: false },
  { name: "Coinbase Global", symbol: "COIN", change: "-3.5%", isGainer: false },
];

export default function MarketMovers() {
  return (
    <ul className="space-y-4">
      {mockMovers.map((mover) => (
        <li key={mover.symbol} className="flex justify-between items-center">
          <div>
            <p className="text-white font-medium">{mover.name}</p>
            <p className="text-gray-400 text-sm">{mover.symbol}</p>
          </div>
          <span
            className={`font-bold ${
              mover.isGainer ? "text-green-500" : "text-red-500"
            }`}
          >
            {mover.change}
          </span>
        </li>
      ))}
    </ul>
  );
}