"use client";
import useQuote from "../..//components/useQuote";

export default function DashboardPage() {
  const { quote, isLoading, isError } = useQuote("AAPL");

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="text-xl font-semibold">Apple (AAPL)</h2>
        <p className="mt-2 text-gray-700">
          Current Price:{" "}
          <span className="font-bold text-green-600">${quote?.c}</span>
        </p>
        <p className="text-sm text-gray-500">Updated every 10s</p>
      </div>
    </section>
  );
}
