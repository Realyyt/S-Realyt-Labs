import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.next();
  }
  // Handle other cases or return an error response
  return NextResponse.redirect(new URL('/404', request.url));
}

export const config = {
  matcher: ['/api/:path*'],
};
