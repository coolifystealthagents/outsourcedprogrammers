import { NextResponse } from 'next/server';
import { canonicalHttpsRedirect } from './lib/canonical-https.mjs';

export function middleware(request) {
  const destination = canonicalHttpsRedirect(request.nextUrl, request.headers);
  return destination
    ? NextResponse.redirect(destination, 308)
    : NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image).*)',
};
