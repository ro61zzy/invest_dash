// apps/web/app/dashboard/layout.tsx
import Sidebar from "../../components/Sidebar";
import TickerTape from "../../components/TickerTape";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {/* Fixed sidebar */}
      <div className="relative z-10">
        <Sidebar />
      </div>
      {/* Scrollable main area */}
      <main className="relative z-10 flex-1 overflow-y-auto p-6 text-white">
        <TickerTape />
        {children}
      </main>
    </div>
  );
}
