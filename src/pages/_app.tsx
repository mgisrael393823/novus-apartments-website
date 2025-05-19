import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import EmailGate from '@/components/EmailGate';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Paths that should bypass the email gate
  const bypassPaths = [
    '/admin/email-list',
    '/api/collect-email',
    '/api/get-emails'
  ];
  
  // Check if current path should bypass the gate
  const shouldBypass = bypassPaths.some(path => router.pathname.startsWith(path));
  
  if (shouldBypass) {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
  
  return (
    <>
      <EmailGate>
        <Component {...pageProps} />
        <Analytics />
      </EmailGate>
    </>
  );
}