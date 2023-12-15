import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import { compare } from 'bcrypt';


export const authOptions: NextAuthOptions = {
    session: {
      strategy: 'jwt',
    },
    providers: [
      CredentialsProvider({
        name: 'Sign in',
        credentials: {
          email: {
            label: 'Email',
            type: 'email',
            placeholder: 'hello@example.com',
          },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          if (!credentials || !credentials.email || !credentials.password) return null;
          const user = await prisma.user.findUnique({ where: { email: credentials.email } });
          if (!user) return null;
          const isPasswordValid = await compare(credentials.password, user.hash);
          if (!isPasswordValid) return null;
          return {
            id: user.id,
            email: user.email,
            username: user.username,
          };
        },
      }),
    ],
    // by default, NextAuth will only contain "name" and "email" in the payload
    // I wanted a "username" field, so I did those custom callbacks
    callbacks: {
      async jwt({ token, user, account, profile }) {
        return { ...token, ...user };
      },
      async session({ session, token, user }) {
        return {
          expires: session.expires,
          user: { email: session.user?.email, username: token.username, id: token.id },
        };
      },
    },
  };