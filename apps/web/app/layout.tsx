 import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Dashboard",
  description: "Track investments, monitor trends, and visualize your portfolio in real time.",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <main className="flex-1 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
