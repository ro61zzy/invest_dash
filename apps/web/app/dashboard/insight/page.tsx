"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, Input } from "@repo/ui";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { appleTrends, microsoftTrends } from "../../../lib/data/recommendationTrends";
import { appleSentiment, microsoftSentiment } from "../../../lib/data/newsSentiment";
import MarketNews from "../../../components/MarketNews";



export default function InsightPage() {
  const [symbol, setSymbol] = useState("AAPL");



const trends = symbol === "AAPL" ? appleTrends : microsoftTrends;
const sentiment = symbol === "AAPL" ? appleSentiment : microsoftSentiment;

const formattedTrends = trends.map(trend => ({
  period: trend.period,
  buy: trend.buy + trend.strongBuy,
  sell: trend.sell + trend.strongSell,
  hold: trend.hold,
}));

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Market Insights</h1>
      <div className="flex flex-row gap-4 w-full items-start">


      <div className="flex flex-row gap-4 w-full">
        <Card className="flex-1  bg-gray-800 text-white ">
          <CardHeader>
            <CardTitle>Analyst Recommendation Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-100 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={formattedTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="period" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Bar dataKey="buy" stackId="a" fill="#34d399" />
                  <Bar dataKey="hold" stackId="a" fill="#0db0d9" />
                  <Bar dataKey="sell" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>News Sentiment Analysis (APL)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mt-5">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Bullish Sentiment:</span>
                <span className="font-bold text-green-500">
                  {sentiment.sentiment.bullishPercent.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Bearish Sentiment:</span>
                <span className="font-bold text-red-500">
                  {sentiment.sentiment.bearishPercent.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Company News Score:</span>
                <span className="font-bold">
                  {sentiment.companyNewsScore.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
       <aside className="w-80 rounded-lg bg-gray-800 p-5 shadow-sm h-fit sticky top-6">
              <h2 className="text-lg font-semibold text-cyan-500 mb-3">
                Latest Headlines
              </h2>
              <MarketNews />
            </aside>
      </div>
    </section>
  );
}
