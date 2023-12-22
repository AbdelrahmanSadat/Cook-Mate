// https://next-auth.js.org/getting-started/typescript#module-augmentation
import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession`, `getServerSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      username: string;
      email: string;
      id: number;
    };
  }
}
