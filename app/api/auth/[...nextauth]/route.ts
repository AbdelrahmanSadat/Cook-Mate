import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import prisma from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  // by default, NextAuth will only contain "name" and "email" in the payload
  // I wanted a "username" field, so I did those custom callbacks
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      return {
        expires: session.expires,
        user: { email: session.user?.email, username: token.username, id: token.id },
      };
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Email',
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
          id: `${user.id}`, // id must be a string
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
