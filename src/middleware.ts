import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware disabled for static export (output: 'export')
// Locale routing handled by [locale] segments + generateStaticParams
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
