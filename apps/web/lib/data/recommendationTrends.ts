export interface RecommendationTrend {
  period: string; // YYYY-MM
  buy: number;
  hold: number;
  sell: number;
  strongBuy: number;
  strongSell: number;
  symbol: string;
}


export const appleTrends: RecommendationTrend[] = [
  { period: "2025-10", buy: 5, hold: 3, sell: 2, strongBuy: 1, strongSell: 0, symbol: "AAPL" },
  { period: "2025-11", buy: 6, hold: 2, sell: 2, strongBuy: 0, strongSell: 1, symbol: "AAPL" },
  { period: "2025-12", buy: 7, hold: 3, sell: 1, strongBuy: 2, strongSell: 0, symbol: "AAPL" },
  { period: "2026-01", buy: 4, hold: 4, sell: 2, strongBuy: 1, strongSell: 0, symbol: "AAPL" },
  { period: "2026-02", buy: 5, hold: 3, sell: 2, strongBuy: 1, strongSell: 0, symbol: "AAPL" },
  { period: "2026-03", buy: 6, hold: 2, sell: 3, strongBuy: 1, strongSell: 0, symbol: "AAPL" },
  { period: "2026-04", buy: 5, hold: 4, sell: 2, strongBuy: 0, strongSell: 0, symbol: "AAPL" },

];


export const microsoftTrends: RecommendationTrend[] = [
  { period: "2025-10", buy: 4, hold: 4, sell: 2, strongBuy: 1, strongSell: 0, symbol: "MSFT" },
  { period: "2025-11", buy: 5, hold: 3, sell: 2, strongBuy: 1, strongSell: 0, symbol: "MSFT" },
  { period: "2025-12", buy: 6, hold: 3, sell: 1, strongBuy: 1, strongSell: 0, symbol: "MSFT" },
  { period: "2026-01", buy: 5, hold: 4, sell: 1, strongBuy: 2, strongSell: 0, symbol: "MSFT" },
  { period: "2026-02", buy: 4, hold: 5, sell: 2, strongBuy: 1, strongSell: 0, symbol: "MSFT" },
  { period: "2026-03", buy: 6, hold: 3, sell: 1, strongBuy: 1, strongSell: 0, symbol: "MSFT" },
  { period: "2026-04", buy: 7, hold: 2, sell: 1, strongBuy: 1, strongSell: 0, symbol: "MSFT" },
];
