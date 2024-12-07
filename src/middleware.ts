import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  
  const token = request.cookies.get('Authorization')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const secret = process.env.TOKEN_SECRET;

  if (!secret) {
    console.error('TOKEN_SECRET no está definido, debe de estar en el .env');
    return NextResponse.redirect(new URL('/login', request.url));
  }
 
  try {

    jwt.verify(token, secret);

    
    return NextResponse.next();
  } catch (error) {
    
    return NextResponse.redirect(new URL('/login', request.url));
  }
}


export const config = {
  matcher: ['/', '/books/:path*'],
}
