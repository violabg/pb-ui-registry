import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Unbounded } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Unbounded({
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
          <main className="relative bg-catalog-grid w-full">
            <div className="absolute w-full h-full overflow-hidden">
              {/* Floating neon orbs */}
              <div className="top-20 -right-32 float-slow absolute bg-(--neon-blue) opacity-20 blur-[100px] rounded-full size-[500px]" />
              <div
                className="top-60 -left-32 float-slow absolute bg-(--neon-magenta) opacity-15 blur-[120px] rounded-full size-[400px]"
                style={{ animationDelay: "-3s" }}
              />
              <div
                className="right-1/4 bottom-40 float-slow absolute bg-(--neon-lime) opacity-10 blur-[80px] rounded-full size-[400px]"
                style={{ animationDelay: "-6s" }}
              />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
