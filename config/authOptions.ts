import { compare } from 'bcrypt';
import prisma from '@/lib/prisma';

export const authOptions = {
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
};
