"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "My Stock", href: "/dashboard/my-stock" },
  { name: "Insight", href: "/dashboard/insight" },
  { name: "Portfolio", href: "/dashboard/portfolio" },
];

export default function Sidebar({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="w-45 h-screen flex-shrink-0 bg-[#107c8f]/35 text-white p-4">
      <h2 className="mb-6 text-xl font-bold">Invest Dash</h2>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onLinkClick} 
              className={`block rounded-lg px-3 py-2 transition ${
                active ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-800"
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
