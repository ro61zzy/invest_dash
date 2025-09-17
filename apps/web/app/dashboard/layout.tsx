// apps/web/app/dashboard/layout.tsx
import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full bg-[#020617]">
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
      <div className="relative z-10">
        <Sidebar />
      </div>
      <main className="relative z-10 flex-1 p-6 text-white">{children}</main>
    </div>
  );
}
