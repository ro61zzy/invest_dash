// apps/web/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Onboarding", href: "/dashboard/onboarding" },
  { name: "Portfolio", href: "/dashboard/portfolio" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 h-screen flex-shrink-0 bg-[#06B6D4]/85 text-white p-4">
      <h2 className="mb-6 text-xl font-bold">Invest Dash</h2>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 transition ${
                active ? "bg-indigo-500 font-semibold" : "hover:bg-indigo-600"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
