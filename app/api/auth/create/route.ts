// We impot our prisma client
// Prisma will help handle and catch errors
import { Prisma, User } from '@prisma/client';
import { hashSync } from 'bcrypt';
import prisma from '@/lib/prisma';

// We hash the user entered password using bcrypt
const hashPassword = (string: string) => hashSync(string, 10);
// function to create user in our database
export async function POST(request: Request) {
  const errors = [];
  const body = await request.json();
  const { username, email, password } = body;

  if (password.length < 6) {
    errors.push('password length should be more than 6 characters');
    return Response.json('Password must be 6 characters or longer', { status: 400 });
  }
  try {
    const user: Partial<User> = await prisma.user.create({
      data: { username, email, hash: hashPassword(body.password) },
    });
    delete user.hash;
    return Response.json(user, { status: 201 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') return Response.json({ message: e.message }, { status: 400 });

      return Response.json({ message: e.message }, { status: 400 });
    }
  }
}
