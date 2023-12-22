import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { authOptions } from '../../../../config/authOptions';
import prisma from '@/lib/prisma';

const handler = NextAuth({
  session: authOptions.session,
  callbacks: authOptions.callbacks,
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
});
export { handler as GET, handler as POST };
