 import './globals.css';
import { ReactNode } from 'react';

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
