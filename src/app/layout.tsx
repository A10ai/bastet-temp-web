import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bastet Hurghada — AI-Powered Smart Apartment Hotel on the Red Sea',
  description: "The Red Sea's first AI-powered smart apartment hotel.",
};

// Root layout — the actual layout with Navbar/Footer is in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
