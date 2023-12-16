'use client';

import { AppShellHeader, Button, Group, Text } from '@mantine/core';
import { getServerSession } from 'next-auth';
import { getSession, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <AppShellHeader className="p-3 pr-6 flex justify-between">
      <Group>
        <Text size="xl" fw={900}>
          <Link className="no-underline visited:text-black text-black" href="/">
            CookMate
          </Link>
        </Text>
      </Group>
      {status == 'authenticated' ? (
        <Group>
          <Link href="/recipes/create">
            <Button>Create Recipe</Button>
          </Link>
          <Button onClick={() => signOut({ callbackUrl: '/' })}>Logout</Button>
        </Group>
      ) : (
        <Group>
          <Link href="/auth/register">
            <Button>Register</Button>
          </Link>

          <Link href="/api/auth/signin">
            <Button>Login</Button>
          </Link>
        </Group>
      )}
    </AppShellHeader>
  );
}
