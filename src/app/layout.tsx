"use client";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor:"rgb(228, 228, 17)", height:"100%"}}>
      <title>海綿寶寶梗圖搜尋</title>
      <body className={inter.className}>{children}
        <Analytics/>
      </body>
    </html>
  );
}
