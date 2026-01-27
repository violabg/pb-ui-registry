import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shadcd/ui registry",
  description: "shadcn-compatible registry and documentation site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background antialiased`}
      >
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
