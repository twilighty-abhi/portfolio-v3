import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Abhiram | Tinkerer",
  description: "A curious explorer with passion in building and breaking stuff.",
  openGraph: {
    title: "Abhiram | Tinkerer",
    description: "A curious explorer with passion in building and breaking stuff.",
    url: "https://abhiramnj.com",
    siteName: "Abhiram NJ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiram | Tinkerer",
    description: "A curious explorer with passion in building and breaking stuff.",
    creator: "@TwilightyAbhi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
