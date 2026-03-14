import type { ReactNode } from 'react';

// Root layout — redirects to default locale
// The actual layout with Navbar/Footer is in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
