import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Sora } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
