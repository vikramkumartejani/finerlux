import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Protect API routes from external access
  if (path.startsWith('/api/') && request.headers.get('referer') && !request.headers.get('referer').includes(request.headers.get('host'))) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Access denied' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
}; 