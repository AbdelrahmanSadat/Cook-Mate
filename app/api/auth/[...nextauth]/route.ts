import NextAuth, { NextAuthOptions } from 'next-auth';
import { compare } from 'bcrypt';
import prisma from '@/lib/prisma';
import { authOptions } from '@/config/authOptions';



const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
