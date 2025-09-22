import type { Metadata } from 'next';
import 'ui/styles/globals.css';
import React from 'react';
import { Toaster } from 'ui';
import { ThemeProvider } from '../components/layouts/ThemeProvider';
import Script from 'next/script';

// TODO: update the site metadata
export const metadata: Metadata = {
  title: 'thesheet',
  description: 'Codebase for thesheet using monorepository',
  icons: {
    icon: '/icon.svg',

  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <body>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        disableTransitionOnChange
        enableSystem
        storageKey='theme'
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
    <Script
      async
      src='https://cloud.umami.is/script.js'
      data-website-id={process.env.UMAMI_WEBSITE_ID}
    />
  </html>
);

export default RootLayout;
