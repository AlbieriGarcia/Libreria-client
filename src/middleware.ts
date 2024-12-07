import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {verifyToken} from '@/libs/Login/AuthRequest'

export const config = {
  matcher: ['/', '/books/:path*', '/home/:path*'],
  runtime: 'nodejs', 
}

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

    verifyToken(token).then(response => {
  
      if(!response.success){
        return NextResponse.redirect(new URL('/login', request.url));
      }

    })


    return NextResponse.next();
  } catch (error) {
    
    console.error('Error: ' + error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

