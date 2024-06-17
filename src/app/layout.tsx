import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terminal",
  description: "LLM Terminal",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/Logo.png",
  },
  openGraph: {
    title: "Terminal",
    description: "LLM Terminal",
    url: "https://llm-terminal.vercel.app/",
    siteName: "Terminal",
    images: [
      {
        url: "https://llm-terminal.vercel.app/OGImage.png",
        width: 1200,
        height: 630,
        alt: "Terminal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terminal",
    description: "LLM Terminal",
    images: [
      {
        url: "https://llm-terminal.vercel.app/OGImage.png",
        width: 1200,
        height: 630,
        alt: "Terminal",
      },
    ],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
