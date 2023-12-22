import { getServerSession } from 'next-auth';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from './config/authOptions';

// This pattern is advised against, because the middleware runs on edge runtime, which has limitations in nodejs apis and node_modules
// export default async function middleware(req: Request) {
//   const session = await getServerSession(authOptions);
//   console.log(session);
//   if (!session) return Response.json({ message: 'Unauthorized' }, { status: 401 });

//   return NextResponse.next();
// }

// "for the time being, withAuth only supports jwt as a session strategy"
//  note that the token is sent as a cookie
export function middleware(req: NextRequestWithAuth) {
  if (req.nextUrl.pathname.startsWith('/api/recipes') && req.method !== 'GET')
    return withAuth(req);

  return NextResponse.next();
}
