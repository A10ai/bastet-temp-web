'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en');
  }, [router]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#0C1B2A',
        color: '#C9975B',
        fontFamily: 'serif',
        fontSize: '1.5rem',
      }}
    >
      Redirecting...
    </div>
  );
}
