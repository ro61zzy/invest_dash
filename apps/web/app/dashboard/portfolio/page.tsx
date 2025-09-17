"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";
import usePortfolio from "../../../hooks/usePortfolio";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Simple mock data for the chart, replace with real historical data from usePortfolio hook
const chartData = [
  { date: "Jan", value: 6000 },
  { date: "Feb", value: 8500 },
  { date: "Mar", value: 9000 },
  { date: "Apr", value: 8000 },
  { date: "May", value: 7000 },
  { date: "Jun", value: 14000 },
];

export default function PortfolioPage() {
  const { holdings, quotes, isLoading, isError } = usePortfolio();

  if (isLoading) {
    return <p className="text-white text-center pt-5">Loading portfolio data...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error loading portfolio data.</p>;
  }

  const portfolioValue = holdings.reduce((total, holding, index) => {
    const quote = quotes?.[index];
    if (quote) {
      return total + holding.shares * quote.c;
    }
    return total;
  }, 0);

  return (
    <section className="pt-5">
      <div className="flex flex-row gap-4 w-full">
        <Card className="flex-1 bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl mt-3 font-bold">${portfolioValue.toFixed(2)}</p>
            <p className="text-green-500">
              +${(portfolioValue * 0.05).toFixed(2)} (+5.00%) Today
            </p>
            <div className="h-64 mt-5">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#34d399" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Your Holdings</CardTitle>
          </CardHeader>
          <div className="mt-5"></div>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead>Symbol</TableHead>
                  <TableHead>Shares</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Change</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {holdings.map((holding, index) => {
                  const quote = quotes?.[index];
                  if (!quote || typeof quote.c !== "number") {
                    // Fallback row while quotes load or missing data
                    return (
                      <TableRow
                        key={holding.symbol}
                        className="border-gray-700"
                      >
                        <TableCell className="font-medium">
                          {holding.symbol}
                        </TableCell>
                        <TableCell>{holding.shares}</TableCell>
                        <TableCell className="text-gray-500">
                          Loading…
                        </TableCell>
                      </TableRow>
                    );
                  }

                  const value = holding.shares * quote.c;
                  const isPositive = quote.dp >= 0;
                  const changeColor = isPositive
                    ? "text-green-500"
                    : "text-red-500";

                  return (
                    <TableRow key={holding.symbol} className="border-gray-700">
                      <TableCell className="font-medium">
                        {holding.symbol}
                      </TableCell>
                      <TableCell>{holding.shares}</TableCell>
                      <TableCell>${quote.c.toFixed(2)}</TableCell>
                      <TableCell>${value.toFixed(2)}</TableCell>
                      <TableCell className={changeColor}>
                        {typeof quote.dp === "number"
                          ? quote.dp.toFixed(2)
                          : "—"}
                        %
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
