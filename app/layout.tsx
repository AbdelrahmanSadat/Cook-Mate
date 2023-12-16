'use client'

import '@mantine/core/styles.css';
import React from 'react';
import {
  MantineProvider,
  ColorSchemeScript,
  AppShell,
  AppShellMain,
  AppShellHeader,
  Group,
  Text,
  Button,
} from '@mantine/core';
import { theme } from '../theme';
import Link from 'next/link';

// These styles apply to every route in the application
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import { SessionProvider, signOut } from 'next-auth/react';
import Navbar from '@/components/Navbar';



export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <SessionProvider>
          <MantineProvider theme={theme}>
            <AppShell pt={64}>
              <Navbar></Navbar>
              <AppShellMain className="">{children}</AppShellMain>
            </AppShell>
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
