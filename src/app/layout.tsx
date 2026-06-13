import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Priyanshu Chaurasia",
    "Software Engineer",
    "Backend Developer",
    "Full Stack",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.website }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    url: profile.website,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col font-mono">{children}</body>
    </html>
  );
}
