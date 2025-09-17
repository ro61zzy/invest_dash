 import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="flex">
          {/* Sidebar placeholder */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
