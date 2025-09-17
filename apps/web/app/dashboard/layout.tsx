"use client";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import TickerTape from "../../components/TickerTape";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen w-full bg-[#020617]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Sidebar for large screens */}
      <div className="hidden md:block relative z-10">
        <Sidebar />
      </div>

      {/* Hamburger button for small screens */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 z-20 block md:hidden bg-gray-800 p-2 rounded hover:bg-gray-700"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Slide-in Sidebar for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)} // clicking the backdrop closes sidebar
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-gray-900 shadow-lg p-4"
            onClick={(e) => e.stopPropagation()} // stop click from bubbling
          >
            {/* Pass a callback to Sidebar so links can close it */}
            <Sidebar onLinkClick={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Scrollable main area */}
      <main className="relative z-10 flex-1 overflow-y-auto p-4   text-white">
        <TickerTape />
        {children}
      </main>
    </div>
  );
}
