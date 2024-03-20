import type { Metadata } from "next";
import { formulaCondensed, founders, foundersMono } from "@/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bon Jovi Demo",
  description: "Bonn Jovi Component Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${founders.variable} ${foundersMono.variable} ${formulaCondensed.variable} font-sans bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
