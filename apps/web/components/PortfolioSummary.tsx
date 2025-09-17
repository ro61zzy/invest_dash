// apps/web/components/dashboard/PortfolioSummary.tsx
"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Tech", value: 40000, color: "#8884d8" },
  { name: "Finance", value: 30000, color: "#82ca9d" },
  { name: "Healthcare", value: 20000, color: "#ffc658" },
  { name: "Other", value: 10000, color: "#ff8042" },
];

export default function PortfolioSummary() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-gray-200">
        <p className="text-lg">Total Value</p>
        <span className="text-2xl font-bold">$100,000</span>
      </div>
      <div className="flex justify-between items-center text-gray-400">
        <p className="text-lg">Today's Return</p>
        <span className="text-green-500 font-bold">+1.25%</span>
      </div>

      {/* The Pie Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-gray-400 text-sm text-center">
        *Asset allocation is based on mock data.
      </p>
    </div>
  );
}