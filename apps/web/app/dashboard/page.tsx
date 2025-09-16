import React from 'react'

export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Investment Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="p-4 bg-white rounded shadow">KPI Cards go here</div>
        <div className="p-4 bg-white rounded shadow">Charts go here</div>
      </div>
    </section>
  );
}
