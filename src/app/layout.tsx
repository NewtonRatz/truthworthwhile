// src/app/layout.tsx

import './globals.css';                              // Tailwind reset & custom globals
import Head from 'next/head';                          // Manage head tags
import Header from '@/components/Header';               // Site header/nav
import Footer from '@/components/Footer';               // Site footer

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TruthWorthwhile</title>
        <meta name="description" content="Real-time, trustworthy news across categories." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col min-h-screen font-sans bg-[var(--background)] text-[var(--foreground)]">
        {/* Header */}
        <Header />

        {/* Main content wrapper */}
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
