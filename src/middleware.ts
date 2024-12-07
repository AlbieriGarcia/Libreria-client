import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
console.log('MIDDDELWN')
export function middleware(request: NextRequest) {
  
  const token = request.cookies.get('Authorization')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

 
  return NextResponse.next();
}


export const config = {
  matcher: ['/', '/books/:path*'],
}
