'use client';

import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, AppShell, AppShellMain } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { theme } from '../theme';

// These styles apply to every route in the application
import './globals.css';
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
              <Navbar />
              <AppShellMain className="">{children}</AppShellMain>
            </AppShell>
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
