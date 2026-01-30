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
  metadataBase: new URL("https://pb-ui-five.vercel.app"),
  title: {
    default: "pb-ui RHF input registry",
    template: "%s | pb-ui registry",
  },
  description:
    "React Hook Form input collection with Zod integration, delivered as a shadcn-compatible registry.",
  applicationName: "pb-ui registry",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "pb-ui RHF input registry",
    description:
      "React Hook Form input collection with Zod integration, delivered as a shadcn-compatible registry.",
    url: "/",
    siteName: "pb-ui registry",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "pb-ui RHF input registry",
    description:
      "React Hook Form input collection with Zod integration, delivered as a shadcn-compatible registry.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
