import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Isaac Mackenzie — Frontend Developer & Founder of IMDEV",
  description:
    "Frontend developer and founder of IMDEV. I architect and ship production React, Next.js, and TypeScript applications — including InkPlan, a live full-stack AI SaaS.",
  openGraph: {
    title: "Isaac Mackenzie — Frontend Developer & Founder of IMDEV",
    description:
      "Frontend developer and founder of IMDEV. I architect and ship production React, Next.js, and TypeScript applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
